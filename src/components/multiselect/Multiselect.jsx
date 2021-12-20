import Select, { components } from "react-select";

/**
 *
 * @param {Object} multiselectProps - Props for tag component.
 * @param {string} multiselectProps.title - The placeholder for the dropdown.
 * @param {Array <{value: string, label: string}>} multiselectProps.options - The array of the starting objects to be selected.
 * @param {Array <{value: string, label: string}>} multiselectProps.selectedOptions - An array of selected objects.
 * @param {() => void} multiselectProps.a - Handler function for the onClick event.
 *
 * @returns {JSX.Element} A Multiselect component.
 */
const Multiselect = ({ title, options, selectedOptions, onChangeHandler }) => {
  
  const Option = (props) => (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          focusable="false"
          aria-hidden="true"
          className="icon icon--small form__icon"
        >
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#icon-chevron-down"
          ></use>
        </svg>
      </components.DropdownIndicator>
    );
  };

  const IndicatorSeparator = () => null;

  const Control = ({ children, ...props }) => (
    <components.Control className="multiselect__control" {...props}>
      {children}
    </components.Control>
  );

  const styles = {
    control: (styles) => ({
      ...styles,
      display: "flex",
      border: "none",
      height: "100%",
      width: "100%",
    }),
    placeholder: (styles) => ({
      ...styles,
      margin: 0,
      color: "currentColor",
    }),
    container: (styles) => ({
      ...styles,
      width: "100%",
      textAlign: "start",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: 0,
      color: "currentColor",
    }),
  };

  return (
    <span
      className="form__input form__input--multi-selectable
      js-article-filter-span"
      onClick={(e) => e.preventDefault()}
    >
      <Select
        styles={styles}
        options={options}
        isMulti
        isSearchable={false}
        closeMenuOnSelect={false}
        placeholder={title}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        components={{ Option, DropdownIndicator, IndicatorSeparator, Control }}
        allowSelectAll={true}
        onChange={onChangeHandler}
        value={selectedOptions}
      />
    </span>
  );
};

export default Multiselect;
