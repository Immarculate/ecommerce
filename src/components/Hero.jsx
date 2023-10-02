import React from 'react';
import { Button } from '@mui/material';
import { headset } from '../assets';

function Hero() {
  return (
    <div className=" background mb-[60px]">
      <div className='flex xs:flex-col mb-[0px]'>
        <div className=" mt-[19vh] ml-[200px] xs:ml-[20px] xs:mt-[50px]">
          <div className='bg-discount-gradient w-[250px] flex justify-center items-center rounded-full'>
            <p>
            <span className="text-white font-bold">20% </span> Discount For{" "}
            <span className="text-white font-bold">1 Month</span>
            </p>
          </div>

          <p className="font-bold mt-8">Music is Everything</p>
          <h1 className="font-bold text-6xl mb-[10px] xs:mb-0">Get Quality Sound.</h1>
          <p className='Font-bold mb-[100px] max-w-[400px]'>Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife. </p>
          <Button variant="contained">Shop Now</Button>
        </div>

        <div className="flex-1">
          <img
            src={headset}
            alt="headset"
            className="h-[75vh] ml-[60px] xs:mb-[50px] xs:h-[40vh] xs:ml-[0px]"
          />
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <Button> New Arrivals</Button>
      </div> */}
    </div>
  );
}

export default Hero;
{/* <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}
