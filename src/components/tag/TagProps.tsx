import { IOption } from "../../models/interfaces";

export interface TagProps<T extends IOption> {
  options: T[];
  onClickHandler: (option: T) => void;
}
