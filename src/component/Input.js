import React, { useEffect, useState } from "react";
import * as ST from "../component/style";
import { NumericFormat } from "react-number-format";

function Input() {
  const [userInput, setUserInput] = useState({ name: "", price: "" });

  // const [name, setName] = useState("");
  // const [numberInput, setNumberInput] = useState("");

  const InputChangeHandler = (e) => {
    // setName(e.target.value);
    // console.log(e.target.name);
    const { value, name } = e.target;
    // console.log(value);
    // console.log(name);

    //라이브러리 없이 숫자만 입력하기 유효성검사
    // if (name === "price") {
    //   if (!/[0-9]$/.test(value)) {
    //     return;
    //   }
    // }
    setUserInput({ ...userInput, [name]: value });
  };

  //콘솔로 다르게 찍히는 이유: 문자+ 객체면 문자열화 됨.
  console.log("userInput", userInput);
  //userInput[object Object]
  console.log(userInput);
  //{name: '송지우', price: '1,232'}
  console.log("userInput" + userInput);
  console.log(`userInput ${JSON.stringify(userInput)}`);

  //3자리 마다 쉼표 찍기.. 라이브러리 없이
  // useEffect(() => {
  //   const formattedNumber = numberInput.replace(/,/g, ""); // 쉼표 제거
  //   const regex = /\B(?=(\d{3})+(?!\d))/g;
  //   // 3자리마다 쉼표를 추가할 정규 표현식
  //   const numberWithCommas = formattedNumber.replace(regex, ",");
  //   setNumberInput(numberWithCommas);
  // }, [numberInput]);

  // useEffect(() => {
  //   setNumberInput("");
  // }, []);

  const onClickAlertHandler = () => {
    alert(`{ name: ${userInput.name}, price: ${userInput.price} }`);
  };

  return (
    <ST.mainBox>
      <ST.mainH3>
        INPUT
        <ST.flexbox>
          이름:{" "}
          <input
            type="text"
            value={userInput.name}
            onChange={InputChangeHandler}
            name="name"
          />
          가격:
          <NumericFormat
            allowNegative="false"
            thousandSeparator={true}
            onChange={InputChangeHandler}
            name="price"
          />
          {/* <input
            type="text"
            value={userInput.price}
            onChange={InputChangeHandler}
            name="price"
          /> */}
          <button onClick={onClickAlertHandler}>저장</button>
          <br />
        </ST.flexbox>
      </ST.mainH3>
    </ST.mainBox>
  );
}

export default Input;
