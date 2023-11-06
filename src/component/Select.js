import React, { useRef, useState } from "react";
import * as ST from "../component/style";
import { FiChevronDown } from "react-icons/fi";

function Select() {
  const [title, setTitle] = useState("리엑트");
  const [displayOn, setDisplayOn] = useState(false);
  // const ulref = useRef("");

  const onClickDisplaySelectHandler = () => {
    // console.log(ulref.current.style);
    // ulref.current.style.display = "block";

    setDisplayOn(!displayOn);
    //여기서 바로 display none을 바꾸는 방법은 없나?

    // const ulDisplay = document.querySelector(".ulDisplay");
    // console.log(ulDisplay.style);
    // console.log(ulref.current.style);
  };

  return (
    <ST.MainBox border={"2px solid #ddd"}>
      <ST.MainH3>SELECT</ST.MainH3>

      <div>
        <ST.Flexbox>
          {/* select1 */}
          <ST.selectTitle onClick={onClickDisplaySelectHandler}>
            <FiChevronDown /> &nbsp; &nbsp;
            {title}
          </ST.selectTitle>

          {/* select2 */}
          <ST.selectTitle onClick={onClickDisplaySelectHandler}>
            <FiChevronDown /> &nbsp; &nbsp;
            {title}
          </ST.selectTitle>
        </ST.Flexbox>

        {/* <ST.ulContent ref={ulref} className="ulDisplay">
          <ST.liContent onClick={() => setTitle("리액트")}>리액트</ST.liContent>
          <ST.liContent onClick={() => setTitle("자바")}>자바</ST.liContent>
          <ST.liContent onClick={() => setTitle("스프링")}>스프링</ST.liContent>
        </ST.ulContent> */}

        {/* select 1 -> selection */}
        {displayOn && (
          <ST.ulContent>
            <ST.liContent onClick={() => setTitle("리액트")}>
              리액트
            </ST.liContent>
            <ST.liContent onClick={() => setTitle("자바")}>자바</ST.liContent>
            <ST.liContent onClick={() => setTitle("스프링")}>
              스프링
            </ST.liContent>
          </ST.ulContent>
        )}

        {/* selec2 -> selection */}
        {displayOn && (
          <ST.ulContent>
            <ST.liContent onClick={() => setTitle("리액트")}>
              리액트
            </ST.liContent>
            <ST.liContent onClick={() => setTitle("자바")}>자바</ST.liContent>
            <ST.liContent onClick={() => setTitle("스프링")}>
              스프링
            </ST.liContent>
          </ST.ulContent>
        )}
      </div>
    </ST.MainBox>
  );
}

export default Select;
