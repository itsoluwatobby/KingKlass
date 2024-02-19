import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { placeholder } from "@babel/types";

type SeacrhBarProps = {
  placeholder: string;
  search: string;
};

export default function SearchBar({ search, placeholder }: SeacrhBarProps) {
  const navigate = useNavigate();

  return (
    <Form.Control
      className="h-12 search--bar bg-light"
      type="search"
      value={search}
      placeholder={placeholder}
      onChange={(e) => navigate(`/products?search=${e.target.value}`)}
    />
  );
}
