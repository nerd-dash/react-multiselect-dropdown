import { IOption } from "../../models/interfaces";

export interface DropdownCheckboxItemProps<T extends IOption> {
  option: T;
  onChangeHandler: (option: T) => void;
}
