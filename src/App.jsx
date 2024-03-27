import { useState } from "react";
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
  const [isVisibleCategoryFruit, setIsVisibleCategoryFruit] = useState(false);
  const [isVisibleCategoryVegetable, setIsVisibleCategoryVegetable] =
    useState(false);


    
  return (
    <>
      <Categories
        category={categories[0]}
        state={isVisibleCategoryFruit}
        setState={setIsVisibleCategoryFruit}
      />

      {/* Solution 1 - condition ternaire*/}
      {isVisibleCategoryFruit ? (
        <>
          <Articles article={articles[0]} />
          <Articles article={articles[1]} />
        </>
      ) : (
        ""
      )}

      <Categories
        category={categories[1]}
        state={isVisibleCategoryVegetable}
        setState={setIsVisibleCategoryVegetable}
      />

      {/* Solution 2 - condition ternaire */}
      {isVisibleCategoryVegetable && (
        <>
          <Articles article={articles[2]} />
          <Articles article={articles[3]} />
        </>
      )}
    </>
  );
}

export default App;
