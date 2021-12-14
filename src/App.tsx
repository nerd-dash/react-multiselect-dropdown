import { useState } from "react";
import "./styles/framework.css";
import Multiselect from "./components/multiselect";
import Tag from "./components/tag";
import { IOption } from "./models/interfaces";


function App() {
  const options: IOption[] = [
    { id: "0", value: "Abe", label: "Abe", selected: false },
    { id: "1", value: "John", label: "John", selected: true },
    { id: "2", value: "Dustin", label: "Dustin", selected: false },
  ];

  const [optionsState, setOptionsState] = useState(options);

  const updateSelectedOption = (option: IOption): void => {
    const options = [...optionsState];
    const selectedOption = options.find((op) => op === option);
    selectedOption && (selectedOption.selected = !selectedOption.selected);
    setOptionsState(options);
    console.log(optionsState);
  };

  const removeSelectedOption = (option: IOption) => {
    const options = [...optionsState];
    const selectedOption = options.find((op) => op === option);
    selectedOption && (selectedOption.selected = false);
    setOptionsState(options);
  };

  return (
    <div className="App">
      <div className="multiselct">
        <Multiselect
          title="MULTISELECT"
          options={optionsState}
          onChangeHandler={updateSelectedOption}
        />
      </div>
      <div className="tag">
        <Tag options={optionsState} onClickHandler={removeSelectedOption} />
      </div>
    </div>
  );
}

export default App;
