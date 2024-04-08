import { useState } from "react";
import Articles from "../Articles/Articles";

function Categories(props) {
  const [isVisibleCategory, setIsVisibleCategory] = useState(false);

  const visibleCategory = () => {
    //Solution 1
    setIsVisibleCategory(!isVisibleCategory);
    // Solution 2
    // if (isVisibleCategory) {
    //   setIsVisibleCategory(false);
    // } else {
    //   setIsVisibleCategory(true);
    // }
  };

  // Solution 2
  // const filterArticle = props.articles.filter(
  //   (article) => props.category === article.category
  // );

  return (
    <>
      <h1 onClick={visibleCategory}>{props.category}</h1>
      {isVisibleCategory && (
        <>
          {/* Solution 1 */}
          {props.articles.map((article, index) => (
            <Articles key={index} article={article} />
          ))}
          {/* Solution 2  */}
          {/* {filterArticle.map((article, index) => (
            <Articles key={index} article={article} />
          ))} */}
        </>
      )}
    </>
  );
}

export default Categories;