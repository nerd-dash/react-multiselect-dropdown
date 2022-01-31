import Select, { components } from "react-select";

/**
 *
 * @param {Object} props - Props for tag component.
 * @param {string} props.title - The placeholder for the dropdown.
 * @param {Array <{value: string, label: string}>} props.options - The array of the starting objects to be selected.
 * @param {Array <{value: string, label: string}>} props.selectedOptions - An array of selected objects.
 * @param {() => void} props.onChangeHandler - Handler function for the onClick event.
 *
 * @returns {JSX.Element} A Multiselect component.
 */
const Multiselect = ({ title, options, selectedOptions, onChangeHandler }) => {
  const tableOrLargerMediaQuery = "@media only screen and (max-width: 1000px)";

  const Option = (props) => (
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} readOnly />{" "}
      <label>{props.label}</label>
    </components.Option>
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

  const styles = {
    control: (styles) => ({
      ...styles,
      display: "flex",
      border: "none",
      height: "100%",
      width: "100%",
      paddingLeft: "18px",
      tableOrLargerMediaQuery: {
        ...styles[tableOrLargerMediaQuery],
        paddingLeft: "20px",
      },
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
      paddingRight: "18px",
      tableOrLargerMediaQuery: {
        ...styles[tableOrLargerMediaQuery],
        paddingRight: "28px",
      },
    }),
  };

  return (
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
        components={{ Option, DropdownIndicator, IndicatorSeparator }}
        allowSelectAll={true}
        onChange={onChangeHandler}
        value={selectedOptions}
        classNamePrefix="multiselect"
      />
  );
};

export default Multiselect;
