import { useState } from "react";
import "./App.css";
import Multiselect from "./components/multiselect";
import { IOption } from "./components/multiselect/IOption";

function App() {
  const options: IOption[] = [
    { id: "0", value: "Abe", label: "Abe", selected: false },
    { id: "1", value: "John", label: "John", selected: true },
    { id: "2", value: "Dustin", label: "Dustin", selected: false },
  ];

  const [optionState, setOptionState] = useState(options);

  const onChangeHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const options = [...optionState];
    const selectedOption = options.find(({ id }) => id === target.id);
    selectedOption && (selectedOption.selected = !selectedOption.selected);
    setOptionState(options);
    console.log(optionState);
  };

  return (
    <div className="App">
      <div className="multiselct">
        <Multiselect
          title="MULTISELECT"
          options={optionState}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  );
}

export default App;
