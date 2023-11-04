import "./App.css";
import * as ST from "./component/style";
import Button from "./component/Button";
import Input from "./component/Input";
// import * as S from './shared/ButtonStyle'

function App() {
  return (
    <>
      <ST.mainContainer>
        <Button></Button>
        <Input></Input>
        <ST.mainBox>
          <ST.mainH3>
            MODAL
            <ST.flexbox>
              <button>open modal</button>
              <button>open modal</button>
            </ST.flexbox>
          </ST.mainH3>
        </ST.mainBox>
        <ST.mainBox>
          <ST.mainH3>SELECT</ST.mainH3>
        </ST.mainBox>
      </ST.mainContainer>
    </>
  );
}

export default App;
