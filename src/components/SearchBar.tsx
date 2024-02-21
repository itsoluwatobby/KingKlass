<<<<<<< HEAD:src/components/SeacrhBar.tsx
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

type SeacrhBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SeacrhBarProps) {
  return <Form.Control className="h-12 search--bar bg-light" type="search" placeholder= {placeholder}/>;
}
/* // return (
  //   <div className="w-full rounded-[3px] bg-slate-100 relative">
  //     <input type="text"
  //       value={search}
  //       placeholder="Search"
  //       className="w-full p-3 text-xs placeholder:text-gray-700 focus:outline-0 border-0 bg-inherit rounded-[3px]"
  //     />
  //     <CiSearch className="absolute text-xl right-2 top-2" />
  //   </div>
  // ) */
=======
import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom";


type SeacrhBarProps = {
  search: string;
}
export default function SearchBar({ search }: SeacrhBarProps) {
  const navigate = useNavigate()

  return (
    <div className="w-full rounded-[3px] bg-slate-100 relative">
      <input type="text" 
        value={search}
        placeholder="Search"
        className="w-full p-3 text-xs placeholder:text-gray-700 focus:outline-0 border-0 bg-inherit rounded-[3px]"
        onChange={e => navigate(`/products?search=${e.target.value}`)}
      />
      <CiSearch className="absolute text-xl right-2 top-2" />
    </div>
  )
}
>>>>>>> 526c7ce7c05da0b52bf9a240527b6022ea758fae:src/components/SearchBar.tsx
