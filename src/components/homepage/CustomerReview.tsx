import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import CustomReviewCard from '../CustomerReviewCard';
import CReview from '../../constant/review';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import { useEffect, useRef } from 'react';

export default function CustomReview() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiper = document.getElementById('mySwiper');
    if (swiper) {
      const mq = window.matchMedia('(max-width: 768px)');
      const handleMediaQuery = (e: any) => {
        const slidesToShow = e.matches ? 1 : 3;
        //@ts-ignore
        swiper.swiper.params.slidesPerView = slidesToShow;
        //@ts-ignore
        swiper.swiper.update();
      };

      mq.addEventListener('change', handleMediaQuery);
      handleMediaQuery(mq);

      return () => {
        mq.removeEventListener('change', handleMediaQuery);
      };
    }
  }, []);

  return (
    <div className="bg-[#F0F7FF] py-4">
      <div className="max-w-screen-xl mx-auto px-4 my-10 md:my-32">
        <div className="flex justify-between items-center">
          <p className="text-xl md:text-4xl font-semibold max-w-96 text-center md:text-start">
            What Our Customers Are Saying About Us
          </p>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 ">
              <button
                ref={prevRef}
                className="bg-[#007aff] p-2 md:p-5 rounded-full text-white "
              >
                <VscArrowLeft />
              </button>
              <button
                ref={nextRef}
                className="bg-[#007aff] p-2 md:p-5 rounded-full text-white"
              >
                <VscArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className=" md:py-16 flex justify-center items-center">
          <Swiper
            effect={'slide'}
            grabCursor={true}
            loop
            spaceBetween={50}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            initialSlide={3}
            slidesPerView={3}
            centeredSlides={true}
            modules={[Autoplay, Navigation]}
            id="mySwiper"
          >
            {CReview.map((item, index) => (
              <SwiperSlide key={index} className="mt-16">
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
