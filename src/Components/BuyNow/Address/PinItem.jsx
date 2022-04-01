import React from "react";

const defaultStyle = {
  width: "2rem",
  height: "2rem",
  borderRadius: "0.25rem",
  padding: "0.5rem 0.25rem"
};

const PinItem = React.forwardRef(
  ({ length, handleChange, handleBackSpace }, ref) => {
    const handleKeyUp = (e) => {
      console.log(e.code);
      switch (e.code) {
        case "Backspace": {
          handleBackSpace && handleBackSpace(e.target.value);
          break;
        }
        case "ShiftLeft":
        case "ShiftRight":
        case "Tab":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowDown":
          break;
        default: {
          handleChange(e.target.value);
        }
      }
    };

    return (
      <div style={{marginTop:"-25px",}}>
        <input
        style={{ width:"50px",border: "1px solid rgb(211, 207, 207)",borderRadius:"3px"}}
          ref={ref}
          maxLength={length}
        //   style={defaultStyle}
          onKeyUp={handleKeyUp}
        />
      </div>
    );
  }
);

export default PinItem;
