import { IOption } from "../../models/interfaces";
import { DropdownCheckboxItemProps } from "./DropdownCheckboxItemProps";

const DropdownCheckboxItem = ({
  option,
  onChangeHandler,
}: DropdownCheckboxItemProps<IOption>) => (
  <div className="dd-list-item" onClick={(e) => e.stopPropagation()}>
    <input
      type="checkbox"
      id={option.id}
      value={option.value}
      checked={option.selected}
      onChange={() => onChangeHandler(option)}
    />
    <label htmlFor={option.id}> {option.label} </label>
  </div>
);
export default DropdownCheckboxItem;
