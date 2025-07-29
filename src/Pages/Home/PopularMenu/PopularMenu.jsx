import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="from our menu"
        heading="Check It Out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
