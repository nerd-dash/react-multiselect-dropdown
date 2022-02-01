import { IOption } from "../../models/interfaces";
import { TagProps } from "./TagProps";

const Tag = ({ options, onClickHandler }: TagProps<IOption>) => (
  <div className="tag--wrapper">
    {options.map(
      (option) =>
        option.selected && (
          <div key={option.id}>
            <span className="tag--label">{option.label}</span>
            <span className="tag--check" onClick={() => onClickHandler(option)}>X</span>
          </div>
        )
    )}
  </div>
);

export default Tag;
