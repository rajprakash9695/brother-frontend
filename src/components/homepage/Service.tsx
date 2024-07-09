import { SwiperSlide, Swiper } from 'swiper/react';
import ServiceCard from '../ServiceCard';
import 'swiper/css/navigation';
import CService from '../../constant/service';
import { TiTick } from 'react-icons/ti';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Service() {
  return (
    <div className="bg-[#f0f7ff] py-4">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="my-10 md:my-32">
          <div className="max-w-screen-md mx-auto text-center mb-10 md:mb-20">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
              Our Services
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              modi vel hic, atque quidem totam alias voluptatem enim. Amet
              excepturi odit itaque.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center gap-8 flex-wrap">
              {CService.map((items) => (
                <ServiceCard
                  img={items.img}
                  title={items.title}
                  description={items.description}
                  lists={items.lists.map((list) => (
                    <div>
                      <p className="flex items-center gap-2">
                        <TiTick /> {list.items[0]}
                      </p>
                      <p className="flex items-center gap-2">
                        <TiTick /> {list.items[1]}
                      </p>
                      <p className="flex items-center gap-2">
                        <TiTick /> {list.items[2]}
                      </p>
                    </div>
                  ))}
                  to={items.to}
                />
              ))}
            </div>
          </div>
          <div className="text-black md:hidden">
            <Swiper
              effect={'slide'}
              grabCursor={true}
              loop
              spaceBetween={40}
              autoplay={{
                delay: 1500,
                pauseOnMouseEnter: true,
              }}
              initialSlide={1}
              slidesPerView={1.25}
              centeredSlides={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper text-white"
            >
              {CService.map((items) => (
                <SwiperSlide>
                  <ServiceCard
                    img={items.img}
                    title={items.title}
                    description={items.description}
                    lists={items.lists.map((list) => (
                      <div>
                        <p className="flex items-center gap-2">
                          <TiTick /> {list.items[0]}
                        </p>
                        <p className="flex items-center gap-2">
                          <TiTick /> {list.items[1]}
                        </p>
                        <p className="flex items-center gap-2">
                          <TiTick /> {list.items[2]}
                        </p>
                      </div>
                    ))}
                    to={items.to}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
