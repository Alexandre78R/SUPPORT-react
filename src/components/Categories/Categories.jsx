function Category(props) {
  const visibleCategory = () => {
    // Solution 1
    // if (props.state) {
    //   props.setState(false);
    // } else {
    //   props.setState(true);
    // }
    //Solution 2
    props.setState(!props.state);
  };

  return (
    <>
      <h1 onClick={visibleCategory}>{props.category}</h1>
    </>
  );
}

export default Category;
