/**
 *
 * @param {Object} props - Props for tag component.
 * @param {Array <{value: string, label: string}>} props.selectedOptions - An array of selected objects.
 * @param {() => void} props.onClickHandler - Handler function for the onClick event.
 *
 * @returns {JSX.Element} A Tag component.
 */
const Tag = ({ selectedOptions, onClickHandler }) => (
  <div className="tag--wrapper">
    {selectedOptions.map((option) => (
      <div key={option.value}>
        <span>{option.label}</span>
        <div onClick={() => onClickHandler(option)}>X</div>
      </div>
    ))}
  </div>
);

export default Tag;
