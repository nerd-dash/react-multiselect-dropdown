import { IOption } from "../../models/interfaces";
import { TagProps } from "./TagProps";

const Tag = ({ options, onClickHandler }: TagProps<IOption>) => (
  <div className="tag--wrapper">
    {options.map(
      (option) =>
        option.selected && (
          <div key={option.id}>
            <span>{option.label}</span>
            <div onClick={() => onClickHandler(option)}>X</div>
          </div>
        )
    )}
  </div>
);

export default Tag;
