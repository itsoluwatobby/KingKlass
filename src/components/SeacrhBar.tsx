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
