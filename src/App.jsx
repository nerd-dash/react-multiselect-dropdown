import { useState, useEffect } from "react";
import Multiselect from "./components/multiselect";
import Tag from "./components/tag";
import { IOption } from "./models/interfaces";

function App() {
  const options = [
    { value: "AbeValue", label: "Abe" },
    { value: "JohnValue", label: "John" },
    { value: "DustinValue", label: "Dustin" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([options[0]]);

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <div className="App">
      <Multiselect
        title="Multiselect"
        options={options}
        selectedOptions={selectedOptions}
        onChangeHandler={setSelectedOptions}
      />

      {/* <div className="tag">
        <Tag options={optionsState} onClickHandler={removeSelectedOption} />
      </div> */}
    </div>
  );
}

export default App;
