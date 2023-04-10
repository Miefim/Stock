import { useState } from 'react'

import UiImage from '../../UI/Image'
import style from './index.module.css'

const Banner: React.FC = () => {
   
   const [index, setIndex] = useState<number>(0)

   const increment = () => {
      if(index === 2){
         setIndex(0)
      }
      else{
         setIndex(index + 1) 
      }
   }

   setTimeout(increment, 3000)

   return(
      <div className={style.banner}>
         <div className={style.banner_contentLeft}>
            <h1 className={style.contentLeft_title}>Let's go to trade</h1>
            <h2>Together with Super Stocks</h2>
            <h3>
               If you are a tough guy and want to increase your wealth, 
               then Super Stocks is for you. We are trusted by billions 
               of people around the world because it's simple, flexible, reliable!
            </h3>
            <div className={style.contentLeft_window}>
               <div className={style.window_tape} style={{transform: `translateY(-${80 * index}px)`}}>
                  <h1 className={style.tape_unit}>Trade 24/7</h1>
                  <h1 className={style.tape_unit}>The best prices</h1>
                  <h1 className={style.tape_unit}>50+ years on the global market</h1>
               </div>
            </div>
         </div>
         <div className={style.banner_contentRight}>
            <UiImage 
               url='/images/banner1.png'  
               className={`${style.contentRight_image} ${index === 0 && style.image_active}`}
            />
            <UiImage 
               url='/images/banner2.png' 
               className={`${style.contentRight_image} ${index === 1 && style.image_active}`}
            />
            <UiImage 
               url='/images/banner3.png' 
               className={`${style.contentRight_image} ${index === 2 && style.image_active}`}
            />
         </div>
      </div>
   )
}

export default Banner