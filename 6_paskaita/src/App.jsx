import { useState } from "react";
import { Button, SpreadingPropButton, ProductList } from "./components";

const App = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <Button onClick={() => alert("Say hello")} style={{ background: "red" }}>
        Say hi
      </Button>
      <br />
      <SpreadingPropButton
        onClick={() => alert("Say hello")}
        style={{ background: "red" }}
      >
        Say hi
      </SpreadingPropButton>
      <button onClick={() => alert("Say hello")} style={{ background: "red" }}>
        Say hi
      </button>
      <br />
      <br />
      <br />

      <Button onClick={() => setDisabled(true)} disabled={disabled}>
        Pirkti
      </Button>
      <br />
      <br />
      <br />
      <SpreadingPropButton
        onClick={() => setDisabled(true)}
        disabled={disabled}
      >
        Pirkti
      </SpreadingPropButton>

      <ProductList
        products={[{ id: 1, name: "iPhone XR", price: 10 }]}
        disabled={disabled}
        onCopy={() => null}
        onDelete={() => null}
      />
    </div>
  );
};

export default App;
