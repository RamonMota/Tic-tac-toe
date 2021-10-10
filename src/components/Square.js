function Square({val, chooseSquare}) {
  return (
    <li onClick={chooseSquare}>
      {val}
    </li>
  );
};

export default Square;

