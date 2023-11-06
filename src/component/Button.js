import React from "react";
import * as ST from "../component/style";
import { BiChevronRight, BiBell } from "react-icons/bi";

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
    <ST.MainBox>
      <ST.MainH3>
        BUTTON
        <ST.Flexbox>
          <ST.MainButton $buttonSty={buttonSty0} onClick={alertHandler}>
            Large Primary Button <BiChevronRight></BiChevronRight>
          </ST.MainButton>
          <ST.MainButton $buttonSty={buttonSty1}>Medium</ST.MainButton>
          <ST.MainButton $buttonSty={buttonSty2}>Small</ST.MainButton>
        </ST.Flexbox>
        <ST.Flexbox>
          <ST.MainButton
            $buttonSty={{
              ...buttonSty0,
              borderColor: "rgb(250, 177, 160)",
              font: "rgb(214, 48, 49)",
            }}
            onClick={inputTextHandler}
          >
            Large Primary Button <BiBell></BiBell>
          </ST.MainButton>
          <ST.MainButton
            $buttonSty={{
              ...buttonSty1,
              background: "rgb(250, 177, 160)",
              font: "rgb(214, 48, 49)",
            }}
          >
            Medium
          </ST.MainButton>
          <ST.MainButton
            $buttonSty={{
              ...buttonSty2,
              background: "rgb(250, 177, 160)",
              font: "rgb(214, 48, 49)",
            }}
          >
            Small
          </ST.MainButton>
        </ST.Flexbox>
      </ST.MainH3>
    </ST.MainBox>
  );
}

export default Button;
