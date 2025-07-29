const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex  p-4 gap-2 items-center ">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] mr-3 h-16"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-1xl ">{name}--------------</h3>
        <p className="text-gray-600">{recipe}</p>
      </div>
      <h1 className="text-yellow-600">${price}</h1>
    </div>
  );
};

export default MenuItem;
