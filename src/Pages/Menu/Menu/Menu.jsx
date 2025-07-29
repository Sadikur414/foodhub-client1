import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";

import menuImage from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>FoodHub - Menu</title>
      </Helmet>

      {/* Main cover  */}
      <Cover image={menuImage} title="Our Menu" />
      {/* Todays offers */}
      <SectionTitle
        subHeading="Don't miss "
        heading="Todays offers"
      ></SectionTitle>
      <MenuCategory items={offeredMenu}></MenuCategory>

      {/* Desserts */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>

      {/* Salads */}
      <MenuCategory items={salad} title="salad" img={saladsImg}></MenuCategory>

      {/* Pizzas */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>

      {/* Soups */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
