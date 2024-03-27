function Article(props) {
  const { article, state, setState } = props;

  const visibleArticle = () => {
    // Solution 1
    // if (state) {
    //   setState(false);
    // } else {
    //   setState(true);
    // }
    //Solution 2
    setState(!state);
  };

  return (
    <>
      <p onClick={visibleArticle}>{article.name}</p>
    </>
  );
}

export default Article;
