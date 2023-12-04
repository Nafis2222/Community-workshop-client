import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
const Review = () => {
    const [reviewss,setreviews] = useState()
    useEffect(()=>{
        fetch('https://community-pi-three.vercel.app/story')
        .then(res=>res.json())
        .then(data=>{setreviews(data)})
    },[])
    return (
        <div>
            <div>
             <div className='mb-6'>
          <div className='text-center mx-auto items-center my-8'>
            <h1 className='text-[#D99904]'>---Some special story from our client---</h1>
            <p className='text-4xl  mx-auto border-y-2 border-black w-3/4 my-3 py-3 '>Tourist have some Special stories</p>
          </div>
            </div>

            <div className="my-7">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {
            reviewss?.map(review =><SwiperSlide key={review._id}>
                <div className="mx-16 items-center text-center   ">
                <Rating  halfFillMode="box" className="items-center mb-3 grid grid-cols-5 mx-auto"
                 
                  style={{ maxWidth: 150 }}
                  value={review?.rating}
                  readOnly
                />
                    
                    
                    <p>{review?.good_service}</p><br/>
                    <h1 className="text-[#D99904] font-medium">{review?.service}</h1>
                </div>


            </SwiperSlide>
            )
        }
      </Swiper>
            </div>
            
        </div>
            
        </div>
    );
};

export default Review;