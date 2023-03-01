import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
  const card_data = data.map((item) => {
    console.log({ ...item });
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Hero />
        <section className="cards-list">{card_data}</section>
      </div>
    </div>
  );
}

export default App;
