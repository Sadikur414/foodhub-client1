import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="my-20">
      {title && <Cover image={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      {title && (
        <div className="flex justify-center mt-6">
          <Link
            to={`/order/${title}`}
            className="btn border-0 border-b-4 btn-neutral btn-outline px-8 py-3 text-lg font-semibold"
          >
            Order Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
