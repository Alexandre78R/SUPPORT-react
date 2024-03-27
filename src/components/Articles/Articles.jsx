function Article(props) {
  const { article } = props;
  return (
    <>
      <p>{article.name}</p>
    </>
  );
}

export default Article;
