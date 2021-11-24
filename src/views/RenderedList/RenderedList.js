const RenderedList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (value) => {
    alert(`Clicked ${value}!`);
  };

  return (
    <ul>
      {array.map((item) => (
        <li key={item}>
          {item} <button onClick={() => handleClick(item)}>click me!</button>
        </li>
      ))}
    </ul>
  );
};

export default RenderedList;
