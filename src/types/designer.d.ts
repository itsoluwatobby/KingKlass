// @types designer.d.ts

type ChildrenNode = {
  children: React.ReactNode;
}

type Size = { 
  width: string; 
  height: string; 
}

type DesignerContextProps = {

}

type AppStateType = {
  isLoading: boolean;
  isError: boolean;
  error: any;
}
