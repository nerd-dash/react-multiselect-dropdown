import { useState, useEffect } from "react";
import Multiselect from "./components/multiselect";
import Tag from "./components/tag";

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

  const onClickHandler = (option) =>
    setSelectedOptions(
      selectedOptions.filter((selectedOption) => selectedOption !== option)
    );

  return (
    <div className="App">
      <Multiselect
        title="Multiselect"
        options={options}
        selectedOptions={selectedOptions}
        onChangeHandler={setSelectedOptions}
      />
            <Multiselect
        title="Multiselect1"
        options={options}
        selectedOptions={selectedOptions}
        onChangeHandler={setSelectedOptions}
      />
            <Multiselect
        title="Multiselect2"
        options={options}
        selectedOptions={selectedOptions}
        onChangeHandler={setSelectedOptions}
      />
            <Multiselect
        title="Multiselect3"
        options={options}
        selectedOptions={selectedOptions}
        onChangeHandler={setSelectedOptions}
      />

      <div className="tag">
        <Tag
          selectedOptions={selectedOptions}
          onClickHandler={onClickHandler}
        />
      </div>
    </div>
  );
}

export default App;
