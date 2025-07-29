import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import featurerd from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-10 py-8 text-white">
      <SectionTitle
        subHeading="check out"
        heading="from our menu"
      ></SectionTitle>

      <div className="md:flex py-20 px-36 justify-center items-center bg-slate-500 bg-opacity-50">
        <div>
          {" "}
          <img src={featurerd} alt="" />
        </div>
        <div className="md:ml-10">
          <h1> March 20, 2023</h1>
          <h2>WHERE CAN I GET SOME?</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptate facere, deserunt dolores maiores quod nobis quas quasi.
          Eaque repellat recusandae ad laudantium tempore consequatur
          consequuntur omnis ullam maxime tenetur.
          <br />
          <button className="btn text-white border-0 border-b-4 mt-5 btn-neutral btn-outline">
            Outline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
