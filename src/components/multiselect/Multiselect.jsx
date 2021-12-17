import Select, { components } from "react-select";
import "./Multiselect.scss";

const Multiselect = (props) => {
  const { title, options, selectedOptions, onChangeHandler } = props;

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
          class="icon icon--small form__icon"
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
    }),
    placeholder: (styles) => ({
      ...styles,
      textAlign: "left",
      margin: 0
    }),
    container: (styles) => ({
      ...styles,
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%"
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: 0
    }),
  }


  return (
    <span className="form__input form__input--selectable
      js-article-filter-span" onClick={(e) => e.preventDefault()}
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
        components={{ Option, DropdownIndicator, IndicatorSeparator }}
        allowSelectAll={true}
        onChange={onChangeHandler}
        value={selectedOptions}
      />
    </span>
  );
};

export default Multiselect;
