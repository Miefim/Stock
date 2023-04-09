import { useEffect, useState } from 'react'
import UiImage from '../../UI/Image'
import style from './index.module.css'

type PaginationsProps = {
   length: number
   unitList: number
   page: number
   setPage: React.Dispatch<React.SetStateAction<number>>
}

const Paginations: React.FC<PaginationsProps> = ({length, unitList, page, setPage}) => {
   
   const [shiftTape, setShiftTape] = useState<number>(0)
   const numbersPage = Math.ceil(length / unitList)

   const nextButtonHandler = () => {
      if(page < numbersPage) {
         setPage(page + 1)
      }
   }

   const prevButtonHandler = () => {
      if(page > 1) {
         setPage(page - 1)
      }
   }

   useEffect(() => {
      if(page > 4 && page < numbersPage - 4){
         setShiftTape((page - 5) * 30)
      }
      else if(page < 5) {
         setShiftTape(0)
      }
      else if(page > numbersPage - 5) {
         setShiftTape((numbersPage - 9) * 30)
      }
   }, [page])

   return(
      <div className={style.pagination}>
         <button className={style.arrowButton} disabled={page === 1} onClick={prevButtonHandler}>
            <UiImage url='/images/leftArrow.png' height='20px'/>
         </button>
         <div className={style.pagination_window}>
            <div className={style.window_tape} style={{transform: `translateX(-${shiftTape}px)`}}>
               {
                  [...new Array(numbersPage)].map((_, i) => {
                     return(
                        <div 
                           className={`${style.navUnit} ${page === i + 1 && style.activeUnit}`}
                           onClick={() => setPage(i + 1)} 
                           key={i}
                        >
                           {i + 1}
                        </div>
                     )  
                  }) 
               } 
            </div>
         </div>
         <button className={style.arrowButton} disabled={page === numbersPage} onClick={nextButtonHandler}>
            <UiImage url='/images/leftArrow.png' height='20px' className={style.arrowButtonRightIcon}/>
         </button>
      </div>
   )
}

export default Paginations