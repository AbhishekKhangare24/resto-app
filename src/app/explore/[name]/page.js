const page = (props) => {
  const name = props.params.name;

  return (
    <div className="restaurant-page-banner">
      <h1>{decodeURI(name)}</h1>
    </div>
  );
};

export default page;
