import { styled } from "styled-components";

//바디 스타일

export const MainContainer = styled.div`
  width: 80%;
  height: 100vh;
  padding: 20px;
  position: relative;
`;

export const MainBox = styled.div`
  width: 80%;
  height: 20%;
`;

export const MainH3 = styled.h3`
  padding-bottom: 10px;
`;

export const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

//버튼 스타일
export const MainButton = styled.button`
  width: ${(props) => props.$buttonSty.width};
  height: ${(props) => props.$buttonSty.height};
  border: 3px solid
    ${(props) =>
      props.$buttonSty.borderColor ? props.$buttonSty.borderColor : "white"};
  background-color: ${(props) =>
    props.$buttonSty.background ? props.$buttonSty.background : "white"};
  border-radius: 10px;
  color: ${(props) =>
    props.$buttonSty.font ? props.$buttonSty.font : "black"};
`;

//모달 스타일
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
  &:hover {
    border: 1px solid black;
  }
`;

//셀렉트 스타일
export const SelectMainBox = styled.div`
  width: 80%;
  height: 25%;
  border: ${(props) => props.$border};
  /* overflow: hidden; */
`;

export const SelectTitle = styled.div`
  width: 280px;
  height: 40px;
  margin-left: 10px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const UlContent = styled.ul`
  width: 300px;
  height: 120px;
  margin-left: 10px;
  padding-left: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: ${(props) =>
    typeof props.$left !== "undefined" ? props.$left : "auto"};
  right: ${(props) =>
    typeof props.$right !== "undefined" ? props.$right : "auto"};
`;

export const LiContent = styled.li`
  list-style: none;
  line-height: 40px;
  width: 100%-20px;
  padding-left: 20px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: #ddd;
  }
`;

export const SelectPositionBox = styled.div`
  width: 95%;
  margin-left: 20px;
  position: relative;
`;
