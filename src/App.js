import Header from "./components/header/Header";
import Home from "./components/main/sectionHome/Home";
import SectionCategories from "./components/main/sectionCategories/SectionCategories";

function App() {

  return (
    <div className="bg-gray-tones-500">
      <div className="block h-11/12 m-0 p-0">
        <Header />
        <Home />
      </div>
      <SectionCategories />
    </div>
  );
}

export default App;
