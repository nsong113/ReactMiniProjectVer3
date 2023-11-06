import React, { useState } from "react";
import * as ST from "../component/style";
import { createPortal } from "react-dom";

function Modal() {
  const [firstIsOpen, setFirstIsOpen] = useState(false);
  const [secondIsOpen, setSecondIsOpen] = useState(false);

  const firstOpenHandler = () => setFirstIsOpen(true);
  const secondOpenHandler = () => setSecondIsOpen(true);

  const firstCloseHandler = () => setFirstIsOpen(false);
  const secondCloseHandler = () => setSecondIsOpen(false);

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

  return (
    <>
      <ST.MainBox>
        <ST.MainH3>
          MODAL
          <ST.Flexbox>
            <ST.MainButton $buttonSty={buttonSty0} onClick={firstOpenHandler}>
              open modal
            </ST.MainButton>
            {firstIsOpen &&
              createPortal(
                <FirstModalLayout onClose={firstCloseHandler} />,
                document.body
              )}

            <ST.MainButton $buttonSty={buttonSty1} onClick={secondOpenHandler}>
              open modal
            </ST.MainButton>
            {secondIsOpen &&
              createPortal(
                <SecondModalLayout onClose={secondCloseHandler} />,
                document.body
              )}
          </ST.Flexbox>
        </ST.MainH3>
      </ST.MainBox>
    </>
  );
}

//첫번째 버튼을 눌렀을 때 나오는 모달
function FirstModalLayout({ onClose }) {
  return (
    <>
      <ST.ModalOverlay />
      <ST.ModalBody>
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        <ST.Flexbox>
          <button onClick={onClose}>닫기</button>
          <button>확인</button>
        </ST.Flexbox>
      </ST.ModalBody>
    </>
  );
}

//첫번째 버튼을 눌렀을 때 나오는 모달
function SecondModalLayout({ onClose }) {
  return (
    <>
      <ST.ModalOverlay onClick={onClose} />
      <ST.ModalBody>
        <ST.Flexbox>
          닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요. &nbsp;
          <ST.RoundCloseModalBtn onClick={onClose}>x</ST.RoundCloseModalBtn>
        </ST.Flexbox>
      </ST.ModalBody>
    </>
  );
}

export default Modal;
