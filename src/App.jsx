import "./App.css";
import Categories from "./components/Categories/Categories";
import Articles from "./components/Articles/Articles";

function App() {
  const categories = ["Fruit", "Vegetable"];

  const articles = [
    { name: "Apple", category: "Fruit" },
    { name: "Banana", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Broccoli", category: "Vegetable" },
  ];

  return (
    <>
      <Categories category={categories[0]} />
      <Articles article={articles[0]} />
      <Articles article={articles[1]} />
      <Categories category={categories[1]} />
      <Articles article={articles[2]} />
      <Articles article={articles[3]} />
    </>
  );
}

export default App;
