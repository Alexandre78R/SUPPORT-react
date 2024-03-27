import "./App.css";
import Category from "./components/Category/Category";
import Article from "./components/Article/Article";

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
      <Category category={categories[0]} />
      <Article article={articles[0]} />
      <Article article={articles[1]} />
      <Category category={categories[1]} />
      <Article article={articles[2]} />
      <Article article={articles[3]} />
    </>
  );
}

export default App;
