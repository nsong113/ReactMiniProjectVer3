import React, { useState } from "react";
import * as ST from "../component/style";
import { createPortal } from "react-dom";

function Modal() {
  const [firstIsOpen, setFirstIsOpen] = useState(false);
  const [secondIsOpen, setSecondIsOpen] = useState(false);

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

  const firstOnCLickMainbtn = () => setFirstIsOpen(true);
  const secondOnCLickMainbtn = () => setSecondIsOpen(true);

  return (
    <>
      <ST.MainBox>
        <ST.MainH3>
          MODAL
          <ST.Flexbox>
            <ST.MainButton
              $buttonSty={buttonSty0}
              name="first"
              onClick={firstOnCLickMainbtn}
            >
              open modal
            </ST.MainButton>
            {firstIsOpen &&
              createPortal(
                <FirstModalLayout onClose={() => setFirstIsOpen(false)} />,
                document.body
              )}

            <ST.MainButton
              $buttonSty={buttonSty1}
              name="second"
              onClick={secondOnCLickMainbtn}
            >
              open modal
            </ST.MainButton>
            {secondIsOpen &&
              createPortal(
                <SeondModalLayout onClose={() => setSecondIsOpen(false)} />,
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
      <ST.modalOverlay />
      <ST.modalBody>
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        <ST.Flexbox>
          <button onClick={onClose}>닫기</button>
          <button>확인</button>
        </ST.Flexbox>
      </ST.modalBody>
    </>
  );
}

//첫번째 버튼을 눌렀을 때 나오는 모달
function SeondModalLayout({ onClose }) {
  return (
    <>
      <ST.modalOverlay onClick={onClose} />
      <ST.modalBody>
        <ST.Flexbox>
          닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요. &nbsp;
          <ST.roundCloseModalBtn onClick={onClose}>x</ST.roundCloseModalBtn>
        </ST.Flexbox>
      </ST.modalBody>
    </>
  );
}

export default Modal;
