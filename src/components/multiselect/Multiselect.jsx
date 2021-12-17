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

  const Control = ({ children, ...props }) => {
    const style = { cursor: "pointer" };

    return (
      <components.Control {...props}>
        <span
          className="form__input form__input--selectable js-article-filter-span"
          style={style}
        >
          {children}
        </span>
      </components.Control>
    );
  };

  return (
    <Select
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
  );
};

export default Multiselect;
