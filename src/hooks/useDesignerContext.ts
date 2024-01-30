import { Context, useContext } from "react";
import { DesignerContext } from "../context/DesignerContext";


export const useDesignerContext = () => {
  return useContext<DesignerContextProps>(DesignerContext as Context<DesignerContextProps>);
}