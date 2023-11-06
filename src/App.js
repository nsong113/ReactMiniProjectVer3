import "./App.css";
import * as ST from "./component/style";
import Button from "./component/Button";
import Input from "./component/Input";
import Modal from "./component/Modal";
import Select from "./component/Select";

function App() {
  return (
    <>
      <ST.MainContainer>
        <Button></Button>
        <Input></Input>
        <Modal></Modal>
        <Select></Select>
      </ST.MainContainer>
    </>
  );
}

export default App;
