import { useState, useEffect } from 'react'

import NavButton from '../../UI/NavButton'
import UiPopup from '../../UI/Popup'
import UiImage from '../../UI/Image'
import style from './index.module.css'

const Navigate: React.FC = () => {
   const [indexNavButton, setIndexNavButton] = useState<number>(0)

   useEffect(() => {
      document.addEventListener('click', () => setIndexNavButton(0))

      return document.removeEventListener('click', () => setIndexNavButton(0))
   },[])

   
   
   const navButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
      event.stopPropagation()
      if(indexNavButton === index){
         setIndexNavButton(0)
      }
      else{
         setIndexNavButton(index)
      }
   }

   return (
      <nav className={style.navigate}>
         <NavButton onClick={(event) => navButtonClickHandler(event, 1)}>
            <div>Trading</div>
            <UiPopup className={indexNavButton === 1 ? style.popup : ''}>
               <div className={style.popup_card}>
                  <UiImage url='/images/popup1.svg' height='30px' className={style.card_image}/>
                  The best traders with us!
               </div>
               <div className={style.popup_card}>
                  <UiImage url='/images/popup2.svg' height='30px' className={style.card_image}/>
                  The best traders with us!
               </div>
               <div className={style.popup_card}>
                  <UiImage url='/images/popup3.svg' height='30px' className={style.card_image}/>
                  The best traders with us!
               </div>
            </UiPopup>
         </NavButton>
         <NavButton onClick={(event) => navButtonClickHandler(event, 2)}>
            <div>Rialto</div>
            <UiPopup className={indexNavButton === 2 ? style.popup : ''}>
               <div className={style.popup_card}>
                  Super Stocks company 50 years on the binary options market!!!
               </div>
            </UiPopup>
         </NavButton>
         <NavButton onClick={(event) => navButtonClickHandler(event, 3)}>
            <div>About Us</div>
            <UiPopup className={indexNavButton === 3 ? style.popup : ''}>
            <div className={style.popup_card}>
               Super Stocks company has been in the binary 
               options market for 50 years, we have more than 600 
               thousand employees!!!
            </div>
            </UiPopup>
         </NavButton>
      </nav>
   )
}

export default Navigate