import { styled } from "styled-components";

export const mainContainer = styled.div`
  width: 80%;
  height: 100vh;
  padding: 20px;
  position: relative;
`;

export const mainBox = styled.div`
  width: 80%;
  height: 20%;
`;

export const mainH3 = styled.h3`
  padding-bottom: 30px;
`;

export const flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const mainButton = styled.button`
  width: ${(props) => props.buttonSty.width};
  height: ${(props) => props.buttonSty.height};
  border: 3px solid
    ${(props) =>
      props.buttonSty.borderColor ? props.buttonSty.borderColor : "white"};
  background-color: ${(props) =>
    props.buttonSty.background ? props.buttonSty.background : "white"};
  border-radius: 10px;
  color: ${(props) => (props.buttonSty.font ? props.buttonSty.font : "black")};
`;

export const modalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
`;

export const modalBody = styled.div`
  width: 50%;
  height: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border-radius: 10px;

  z-index: 100;
`;

export const roundCloseModalBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  //호버 구현하기 &와 :사이 빈칸이 있으면 안된다.
  &:hover {
    border: 1px solid black;
  }
`;
