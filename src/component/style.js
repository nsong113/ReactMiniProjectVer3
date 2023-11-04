import { styled } from "styled-components";

export const mainContainer = styled.div`
  width: 80%;
  height: 100vh;
  padding: 20px;
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
  justify-content: space-between;
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
