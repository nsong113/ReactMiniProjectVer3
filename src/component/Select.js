import React, { useRef, useState } from "react";
import * as ST from "../component/style";
import { FiChevronDown } from "react-icons/fi";

function Select() {
  const [firstTitle, setFirstTitle] = useState("리엑트");
  const [secondTitle, setSecondTitle] = useState("리엑트");

  const [firstDisplayOn, setFirstDisplayOn] = useState(false);
  const [secondDisplayOn, setSecondDisplayOn] = useState(false);

  const overflowRef = useRef("");

  const firstOnClickDisplaySelectHandler = () => {
    setFirstDisplayOn(!firstDisplayOn);
    setSecondDisplayOn(false);
    overflowRef.current.style.overflow = "visible";
  };

  const secondOnClickDisplaySelectHandler = () => {
    setSecondDisplayOn(!secondDisplayOn);
    setFirstDisplayOn(false);
    overflowRef.current.style.overflow = "hidden";
  };

  const selectContents = ["리액트", "자바", "스프링"];

  return (
    <ST.SelectMainBox $border={"2px solid #ddd"} ref={overflowRef}>
      <ST.MainH3>SELECT</ST.MainH3>

      <div>
        <ST.Flexbox>
          {/* select1 */}
          <ST.SelectTitle onClick={firstOnClickDisplaySelectHandler}>
            <FiChevronDown /> &nbsp; &nbsp;
            {firstTitle}
          </ST.SelectTitle>

          {/* select2 */}
          <ST.SelectTitle onClick={secondOnClickDisplaySelectHandler}>
            <FiChevronDown /> &nbsp; &nbsp;
            {secondTitle}
          </ST.SelectTitle>
        </ST.Flexbox>

        {/* select 1 -> selection */}
        <ST.SelectPositionBox>
          {firstDisplayOn && (
            <ST.UlContent $left={0}>
              {selectContents.map((item) => {
                return (
                  <ST.LiContent onClick={() => setFirstTitle(`${item}`)}>
                    {item}
                  </ST.LiContent>
                );
              })}
            </ST.UlContent>
          )}

          {/* selec2 -> selection */}
          {secondDisplayOn && (
            <ST.UlContent $right={0}>
              {selectContents.map((item) => {
                return (
                  <ST.LiContent onClick={() => setSecondTitle(`${item}`)}>
                    {item}
                  </ST.LiContent>
                );
              })}
            </ST.UlContent>
          )}
        </ST.SelectPositionBox>
      </div>
    </ST.SelectMainBox>
  );
}

export default Select;
