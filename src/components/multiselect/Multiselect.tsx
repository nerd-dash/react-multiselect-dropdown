import React, { useEffect, useState } from "react";
import { IOption } from "../../models/interfaces";
import DropdownCheckboxItem from "./DropdownCheckboxItem";
import { MultiselectProps } from "./MultiselectProps";

const Multiselect = ({
  title,
  options,
  onChangeHandler,
}: MultiselectProps<IOption>) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const closeListOnClick = () => setIsListOpen(false);
  const closeListOnEscKey = (event: KeyboardEvent) =>
    event && event.key === "Escape" && setIsListOpen(false);

  useEffect(() => {
    if (isListOpen) {
      window.addEventListener("click", closeListOnClick);
      window.addEventListener("keydown", closeListOnEscKey);
      return;
    }
    window.removeEventListener("click", closeListOnClick);
    window.removeEventListener("keydown", closeListOnEscKey);
  }, [isListOpen]);

  return (
    <div className="dd-wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="dd-header" onClick={toggleList}>
        <div className="dd-header-title">{title}</div>
      </div>

      {isListOpen && (
        <div className="dd-list">
          {options.map((option) => (
            <DropdownCheckboxItem
              option={option}
              key={option.id}
              onChangeHandler={onChangeHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Multiselect;
