import { useEffect, useRef, useState } from "react";
import PinItem from "./PinItem";

function PinInput({ noOfBoxes = 4, length = 4, onChange }) {
  const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));
  const arr = new Array(noOfBoxes).fill(0);
  const ref = useRef([]);

  const handleChange = (val, index) => {
    // set the value[i] to new value
    values[index] = val;
    setValues([...values]);
    // move to next input box
    if (val.length === length && index < noOfBoxes - 1) {
      ref.current[index + 1].focus();
    }
    // if onchagne exists invoke onChange and pass the joined value
    onChange && onChange(values.join(""));
  };

  const handleBackSpace = (val, index) => {
    let tmp = values[index];
    values[index] = val;
    if (index > 0 && tmp.length === 0) {
      ref.current[index - 1].focus();
    }
    setValues([...values]);
    onChange(values.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteValue = e.clipboardData
      .getData("text")
      .split("")
      .filter((a, i) => i < length * noOfBoxes);
    // assumption: it will work only for length per box = 1;
    pasteValue.forEach((char, index) => {
      values[index] = char;
      ref.current[index].value = char;
      if (index < noOfBoxes - 1) {
        ref.current[index + 1].focus();
      }
      setValues([...values]);
      onChange && onChange(values.join(""));
    });
    // console.log(val);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        width:"85%",
       
      }}
      onPaste={handlePaste}
    >
      {arr.map((_, i) => (
        // <input key={i} ref={(el) => (ref.current[i] = el)} />
        <PinItem
          key={i}
          ref={(el) => (ref.current[i] = el)}
          handleChange={(v) => handleChange(v, i)}
          handleBackSpace={(v) => handleBackSpace(v, i)}
          length={length}
        />
      ))}
    </div>
  );
}

export default PinInput;
