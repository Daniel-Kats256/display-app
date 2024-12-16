import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Card from "./components/Card";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import Buton from "./components/Buton";
import { useState } from "react";
import Student from "./components/Student";

function App() {
  let items = ["New York", "San Fransico", "Tokyo", "Londan", "Paris"];
  const handleSelctItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <Header />
      <Food />
      <div className="">
        <div className="cad">
          <Card title="Bad black" description="big musician" />
          <Card title="Asuzue Mattew" description="movie subtask" />
          <Card title="Black Adam" description="best movie" />
          <Card title="The most task" description="movie title" />
        </div>
        {/* <Buton /> */}
        <div className="students">
          <Student name="Daniel" age={24} />
          <Student name="Hilah" age={25} />
          <Student name="tom" age={23} />
        </div>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="cities"
          onSelectItem={handleSelctItem}
        />
      </div>
      <div>
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>world</span>
        </Alert>
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
        )}
        <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      </div>
      <Footer />
    </>
  );
}

export default App;
