const ConditionallyRender = () => {
  const ifCondition = (value) => {
    if (value) {
      return <h1>Hello</h1>;
    } else {
      return <h1>Hi</h1>;
    }
  };

  const switchStatement = (value) => {
    switch (value) {
      case 1:
        return <p>1</p>;
      case 2:
        return <p>2</p>;
      case 3:
        return <p>3</p>;
      default:
        return <p>default</p>;
    }
  };

  return (
    <div>
      {ifCondition(true)}
      {switchStatement(2)}
      <h3>Ternary operator</h3>
      {true ? <p>true</p> : <p>false</p>}
      <h3>Logical && Operator</h3>
      {true && <p>true</p>}
    </div>
  );
};

export default ConditionallyRender;
