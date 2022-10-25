// Components
import Menu from "./components/Menu";

function App() {
  const menuData = [
    { id: 0, title: "Youtube" },
    { id: 1, title: "Disney+" },
    { id: 2, title: "Netflix" },
    { id: 3, title: "Amazon Prime" },
    { id: 4, title: "HBO" },
  ];

  return (
    <div className="App">
      <Menu data={menuData} focusKey="Menu" />
    </div>
  );
}

export default App;
