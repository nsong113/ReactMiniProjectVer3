import "./App.css";
import * as ST from "./component/style";
import Button from "./component/Button";
import Input from "./component/Input";
import Modal from "./component/Modal";
import Select from "./component/Select";

// import * as S from './shared/ButtonStyle'

function App() {
  return (
    <>
      <ST.mainContainer>
        <Button></Button>
        <Input></Input>
        <Modal></Modal>
        <Select></Select>
      </ST.mainContainer>
    </>
  );
}

export default App;
