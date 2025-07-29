import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="What our client say"
        heading="testimonials"
      ></SectionTitle>
      <div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review._id}>
                {" "}
                <div className=" flex flex-col items-center px-14 py-10">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p>{review.details}</p>
                  <h1 className="text-2xl text-center mt-2 text-yellow-600">
                    {review.name}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
