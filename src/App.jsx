import "./App.css";
import Categories from "./components/Categories/Categories";

function App() {
  const categories = ["Fruit", "Vegetable"];

  const articles = [
    { name: "Apple", category: "Fruit" },
    { name: "Banana", category: "Fruit" },
    { name: "Orange", category: "Fruit" },
    { name: "Strawberry", category: "Fruit" },
    { name: "Grapes", category: "Fruit" },
    { name: "Watermelon", category: "Fruit" },
    { name: "Pineapple", category: "Fruit" },
    { name: "Kiwi", category: "Fruit" },
    { name: "Mango", category: "Fruit" },
    { name: "Peach", category: "Fruit" },
    { name: "Pear", category: "Fruit" },
    { name: "Plum", category: "Fruit" },
    { name: "Cherry", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Broccoli", category: "Vegetable" },
    { name: "Tomato", category: "Vegetable" },
    { name: "Lettuce", category: "Vegetable" },
    { name: "Cucumber", category: "Vegetable" },
    { name: "Potato", category: "Vegetable" },
    { name: "Onion", category: "Vegetable" },
    { name: "Garlic", category: "Vegetable" },
    { name: "Bell pepper", category: "Vegetable" },
    { name: "Spinach", category: "Vegetable" },
    { name: "Zucchini", category: "Vegetable" },
    { name: "Eggplant", category: "Vegetable" },
    { name: "Cauliflower", category: "Vegetable" },
  ];

  return (
    <>
      {categories.map((category, index) => {
        // Solution 1
        return (
          <Categories
            key={index}
            category={category}
            articles={articles.filter(
              (article) => category === article.category
            )}
          />
        );
        // Solution 2
        // return (
        //   <Categories key={index} category={category} articles={articles} />
        // );
      })}
    </>
  );
}

export default App;