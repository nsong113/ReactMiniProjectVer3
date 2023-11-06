import React, { useEffect, useRef, useState } from "react";
import * as ST from "../component/style";
import { NumericFormat } from "react-number-format";

function Input() {
  //객체에 한꺼번에 담기
  // const [userInput, setUserInput] = useState({ name: "", price: "" });

  // const InputChangeHandler = (e) => {
  //   // setName(e.target.value);
  //   // console.log(e.target.name);
  //   const { value, name } = e.target;
  //   // console.log(value);
  //   // console.log(name);

  //   //라이브러리 없이 숫자만 입력하기 유효성검사
  // if (name === "price") {
  //   if (!/[0-9]$/.test(value)) {
  //     return;
  //   }
  // }
  //   setUserInput({ ...userInput, [name]: value });
  // };

  // //콘솔로 다르게 찍히는 이유: 문자+ 객체면 문자열화 됨.
  // console.log("userInput", userInput);
  // //userInput[object Object]
  // console.log(userInput);
  // //{name: '송지우', price: '1,232'}
  // console.log("userInput" + userInput);
  // console.log(`userInput ${JSON.stringify(userInput)}`);

  const [name, setName] = useState("");

  // const [alertNum, setAlertNum] = useState("");

  // const alertNum = useRef("");
  const [numberInput, setNumberInput] = useState("");
  // const numberInput = useRef("");

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  //그거를 지금 여기서 복사를 진행하려 함, 메모리 값이 달라져야 하는게 포인트!
  const onChangeNumberHandler = (e) => {
    if (!/[0-9]$/.test(e.target.value)) {
      return;
    }

    //.replace(/,/g, "") 사용해서 쉼표 제거
    const number = e.target.value;
    setNumberInput(number);

    //useRef로 시도
    //버린 이유: numinput을 value로 주니까 즉각 즉각 렌더링이 안된다.
    //alertnum을 alert로 사용하니까 변화에 한발 늦는다.
    // const number = e.target.value;
    // console.log(number); //[ok
    // console.log(numberInput); //ok
    // console.log(numberInput.current); //ok
    // alertNum.current = number;
    // setNumberInput(number);
    // setAlertNum(number);
    // numberInput.current += number;
    // console.log(numberInput);

    //for in으로 복사 시도
    // var result = [];
    // for (var prop in number) {
    //   result[prop] = number[prop];
    // }
    // return setNumberInput(result);

    //json으로 복사 시도
    // setNumberInput(JSON.parse(JSON.stringify(number)));
  };

  //3자리 마다 쉼표 찍기.. 라이브러리 없이 ver
  useEffect(() => {
    const formattedNumber = numberInput.replace(/,/g, ""); // 쉼표 제거
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    // 3자리마다 쉼표를 추가할 정규 표현식
    const numberWithCommas = formattedNumber.replace(regex, ",");
    // numberInput = numberWithCommas;
    setNumberInput(numberWithCommas);
  }, [numberInput]);

  const onClickAlertHandler = () => {
    const formattedNumber = numberInput.replace(/,/g, "");
    alert(`{ name: ${name}, price: ${formattedNumber} }`);
  };

  return (
    <ST.MainBox>
      {numberInput.current}
      <ST.MainH3>
        INPUT
        <ST.Flexbox>
          이름:{" "}
          <input
            type="text"
            value={name}
            onChange={onChangeNameHandler}
            name="name"
          />
          가격:
          {/* <NumericFormat
            allowNegative="false"
            thousandSeparator={true}
            onChange={InputChangeHandler}
            name="price"
          /> */}
          <input
            type="text"
            value={numberInput}
            onChange={onChangeNumberHandler}
            name="price"
            // ref={alertNum}
          />
          <button onClick={onClickAlertHandler}>저장</button>
          <br />
        </ST.Flexbox>
      </ST.MainH3>
    </ST.MainBox>
  );
}

export default Input;
