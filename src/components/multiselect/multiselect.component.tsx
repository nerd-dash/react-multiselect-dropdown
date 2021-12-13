import React, { useEffect, useState } from "react";
import { IOption } from "./IOption";

type MultiselectProps<T extends IOption> = {
  id?: string;
  options: T[];
  title: string;
  placeholder?: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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

type DropdownCheckboxItemProps<T extends IOption> = {
  option: T;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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
      onChange={onChangeHandler}
    />
    <label htmlFor={option.id}> {option.label} </label>
  </div>
);
export default Multiselect;
