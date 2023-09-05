const MenuItems = ({item}) => {
  const { name, image, price, recipe } = item;
  console.log(image);
  return (
    <div className="flex space-x-2">
        <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src="https://images.pexels.com/photos/5531659/pexels-photo-5531659.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div>
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItems;
