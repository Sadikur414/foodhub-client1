import { Helmet } from "react-helmet-async";
import headingImage from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../shared/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const index = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(index);

  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>FoodHub - Order</title>
      </Helmet>
      {/* cover part */}
      <Cover image={headingImage} title="Our Shop"></Cover>
      {/* tab part */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
