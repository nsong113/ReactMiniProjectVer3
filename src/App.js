import "./App.css";
import * as ST from "./component/style";
import Button from "./component/Button";
import Input from "./component/Input";
import Modal from "./component/Modal";
// import * as S from './shared/ButtonStyle'

function App() {
  return (
    <>
      <ST.mainContainer>
        <Button></Button>
        <Input></Input>
        <Modal></Modal>

        <ST.mainBox>
          <ST.mainH3>SELECT</ST.mainH3>
        </ST.mainBox>
      </ST.mainContainer>
    </>
  );
}

export default App;
