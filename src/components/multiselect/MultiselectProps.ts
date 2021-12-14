import { IOption } from "../../models/interfaces";

export interface MultiselectProps<T extends IOption> {
  id?: string;
  options: T[];
  title: string;
  placeholder?: string;
  onChangeHandler: (option: T) => void;
}
