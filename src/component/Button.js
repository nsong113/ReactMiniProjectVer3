import React from "react";
import * as ST from "../component/style";

function Button() {
  const alertHandler = () => {
    alert("버튼을 만들어보세요");
  };

  const inputTextHandler = () => {
    prompt("어렵나요?");
  };

  const buttonSty0 = {
    width: "200px",
    height: "60px",
    borderColor: "rgb(85, 239, 196)",
  };

  const buttonSty1 = {
    width: "150px",
    height: "50px",
    background: "rgb(85, 239, 196)",
  };

  const buttonSty2 = {
    width: "100px",
    height: "40px",
    background: "rgb(85, 239, 196)",
  };

  return (
    <ST.mainBox>
      <ST.mainH3>
        BUTTON
        <ST.flexbox>
          <ST.mainButton buttonSty={buttonSty0} onClick={alertHandler}>
            Large Primary Button
          </ST.mainButton>
          <ST.mainButton buttonSty={buttonSty1}>Medium</ST.mainButton>
          <ST.mainButton buttonSty={buttonSty2}>Small</ST.mainButton>
        </ST.flexbox>
        <ST.flexbox>
          <ST.mainButton
            buttonSty={{
              ...buttonSty0,
              borderColor: "rgb(250, 177, 160)",
              font: "rgb(214, 48, 49)",
            }}
            onClick={inputTextHandler}
          >
            Large Primary Button
          </ST.mainButton>
          <ST.mainButton
            buttonSty={{
              ...buttonSty1,
              background: "rgb(250, 177, 160)",
              font: "rgb(214, 48, 49)",
            }}
          >
            Medium
          </ST.mainButton>
          <ST.mainButton
            buttonSty={{
              ...buttonSty2,
              background: "rgb(250, 177, 160)",
              font: "rgb(214, 48, 49)",
            }}
          >
            Small
          </ST.mainButton>
        </ST.flexbox>
      </ST.mainH3>
    </ST.mainBox>
  );
}

export default Button;
