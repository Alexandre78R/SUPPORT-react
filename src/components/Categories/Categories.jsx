import { useState } from "react";
import Articles from "../Articles/Articles";

function Categories(props) {
  const [isVisibleCategory, setIsVisibleCategory] = useState(false);

  const visibleCategory = () => {

    setIsVisibleCategory(!isVisibleCategory);
  };


  return (
    <>
      <h1 onClick={visibleCategory}>{props.category.name}</h1>
      {isVisibleCategory && (
        <>
          {props.articles.map((article, index) => (
            <Articles key={index} article={article} />
          ))}
        </>
      )}
    </>
  );
}

export default Categories;