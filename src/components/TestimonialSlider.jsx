// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide h-full flex items-center">
            <h6 className="text-center rounded-lg py-6 px-4">
              “Our son was diagnosed with bilateral moderate sensorineural
              hearing loss as a newborn. We were in the middle of a pandemic and
              feeling overwhelmed about raising a baby in quarantine, let alone
              all the services our new baby would require.” <br />
              ~DS
            </h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-full flex items-center ">
            <h6 className="text-center rounded-lg py-8 px-4">
              “Rana is a creative and caring speech therapist. She worked for
              two years with my toddler aged daughter creating activities that
              engaged my child to help her develop her speech pronunciation...
              <br />
              ~KT
            </h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-full flex items-center">
            <h6 className="text-center rounded-lg py-8 px-4">
              "My daughter began working with Rana at 6 months old after being
              diagnosed with unilateral sensorineural hearing loss. Rana's calm
              and kind demeanor immediately put my daughter at ease. <br />
              ~MH
            </h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
