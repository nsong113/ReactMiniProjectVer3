import React, { useEffect, useRef, useState } from "react";
import * as ST from "../component/style";

function Input() {
  const [name, setName] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const onChangeNameHandler = (e) => setName(e.target.value);

  const onChangeNumberHandler = (e) => {
    if (!/[0-9]$/.test(e.target.value)) {
      return;
    }

    const number = e.target.value;
    setNumberInput(number);
  };

  //3자리 마다 쉼표 찍기
  useEffect(() => {
    const formattedNumber = numberInput.replace(/,/g, "");
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    const numberWithCommas = formattedNumber.replace(regex, ",");
    setNumberInput(numberWithCommas);
  }, [numberInput]);

  //마지막 alert창에서 쉼표 제거하기
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
          <input
            type="text"
            value={numberInput}
            onChange={onChangeNumberHandler}
            name="price"
          />
          <button onClick={onClickAlertHandler}>저장</button>
          <br />
        </ST.Flexbox>
      </ST.MainH3>
    </ST.MainBox>
  );
}

export default Input;
