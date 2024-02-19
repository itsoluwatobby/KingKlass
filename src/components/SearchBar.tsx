import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

type SeacrhBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SeacrhBarProps) {
  return <Form.Control className="h-12 search--bar bg-light" type="search" placeholder= {placeholder}/>;
}
