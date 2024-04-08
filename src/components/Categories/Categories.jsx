function Categories(props) {
  const visibleCategory = () => {
    // Solution 1
    // if (props.stateVisibleCategory) {
    //   props.setStateVisibleCategory(false);
    // } else {
    //   props.setStateVisibleCategory(true);
    // }
    //Solution 2
    props.setStateVisibleCategory(!props.stateVisibleCategory);
  };

  return (
    <>
      <h1 onClick={visibleCategory}>{props.category}</h1>
    </>
  );
}

export default Categories;
