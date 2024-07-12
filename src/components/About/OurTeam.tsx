import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import { useEffect, useRef } from 'react';
import CTeam from '../../constant/team';

export default function OurTeam() {
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
    <div className=" py-4" id="ourteam">
      <div className="max-w-screen-xl mx-auto px-4 my-10 md:my-32">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-4xl text-center md:text-start font-bold mb-2">
              Our Team
            </h1>
            <p className="text-sm md:text-lg max-w-96 text-center md:text-start text-gray-500">
              Our team of seasoned consultants brings a wealth of experience and
              expertise to the table.
            </p>
          </div>

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
            initialSlide={1}
            slidesPerView={3}
            centeredSlides={true}
            modules={[Autoplay, Navigation]}
            id="mySwiper"
          >
            {CTeam.map((item, index) => (
              <SwiperSlide key={index} className="mt-16  ">
                <div className="border rounded-t-xl  overflow-hidden">
                  <div className="h-72 w-full ">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center my-6">
                    <p className="font-semibold text-xl mb-2">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.job}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
