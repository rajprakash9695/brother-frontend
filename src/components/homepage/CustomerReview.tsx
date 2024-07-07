import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import CustomButton from "../CustomButton";
import CustomReviewCard from "../CustomerReviewCard";
import CReview from "../../constant/review";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

export default function CustomReview() {
  return (
    <div className="bg-[#F0F7FF] py-4">
      <div className="max-w-screen-xl mx-auto px-4 my-10 md:my-32  ">
        <div className="flex justify-between">
          <p className="text-4xl font-semibold">
            What Our Customers Are <br /> Saying About Us
          </p>
          <div className="flex items-center gap-4">
            <VscArrowLeft className="bg-[#007aff]  text-white " />
            <VscArrowRight className="px-6 py-6 rounded-full h-10 text-white bg-[#007aff]" />
          </div>
          <CustomButton bgColor="[#007aff]" text="Next" color="white" />
        </div>
        <div className="py-16 flex justify-center items-center">
          <Swiper
            effect={"slide"}
            grabCursor={true}
            loop
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
            }}
            initialSlide={3}
            slidesPerView={3}
            centeredSlides={true}
            className="mySwiper  "
          >
            {CReview.map((item) => (
              <SwiperSlide className="mt-16">
                <CustomReviewCard
                  img={item.img}
                  name={item.name}
                  description={item.description}
                  job={item.job}
                  date={item.date}
                  rating={item.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
