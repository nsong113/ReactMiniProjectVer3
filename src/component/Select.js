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
    // console.log(ulref.current.style);
    // ulref.current.style.display = "block";

    setFirstDisplayOn(!firstDisplayOn);
    //여기서 바로 display none을 바꾸는 방법은 없나?

    // const ulDisplay = document.querySelector(".ulDisplay");
    // console.log(ulDisplay.style);
    // console.log(ulref.current.style);
    setSecondDisplayOn(false);
    overflowRef.current.style.overflow = "visible";
  };

  const secondOnClickDisplaySelectHandler = () => {
    setSecondDisplayOn(!secondDisplayOn);
    setFirstDisplayOn(false);
    overflowRef.current.style.overflow = "hidden";
  };

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

        {/* <ST.UlContent ref={ulref} className="ulDisplay">
          <ST.LiContent onClick={() => setTitle("리액트")}>리액트</ST.LiContent>
          <ST.LiContent onClick={() => setTitle("자바")}>자바</ST.LiContent>
          <ST.LiContent onClick={() => setTitle("스프링")}>스프링</ST.LiContent>
        </ST.UlContent> */}

        {/* select 1 -> selection */}

        <ST.SelectPositionBox>
          {firstDisplayOn && (
            <ST.UlContent $left={0}>
              <ST.LiContent onClick={() => setFirstTitle("리액트")}>
                리액트
              </ST.LiContent>
              <ST.LiContent onClick={() => setFirstTitle("자바")}>
                자바
              </ST.LiContent>
              <ST.LiContent onClick={() => setFirstTitle("스프링")}>
                스프링
              </ST.LiContent>
            </ST.UlContent>
          )}

          {/* selec2 -> selection */}
          {secondDisplayOn && (
            <ST.UlContent $right={0}>
              <ST.LiContent onClick={() => setSecondTitle("리액트")}>
                리액트
              </ST.LiContent>
              <ST.LiContent onClick={() => setSecondTitle("자바")}>
                자바
              </ST.LiContent>
            </ST.UlContent>
          )}
        </ST.SelectPositionBox>
      </div>
    </ST.SelectMainBox>
  );
}

export default Select;
