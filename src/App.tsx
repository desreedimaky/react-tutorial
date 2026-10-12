import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <main className="container mt-4">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <div className="mt-4">
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            This is an alert!
          </Alert>
        )}

        <Button color="primary" onClick={() => setAlertVisible(true)}>
          Show Alert
        </Button>
      </div>
    </main>
  );
}

export default App;
