import { useState } from 'react'
import UiImage from '../../UI/Image'
import UiPageHeader from '../../UI/PageHeader'
import Paginations from '../PaginationBlock'
import style from './index.module.css'

const StocksList: React.FC = () => {

   const [page, setPage] = useState(1)

   return(
      <div className={style.list}>
         <UiPageHeader className={style.list_header}>
            <div className={style.header_smallColumn}>№</div>
            <div className={style.header_bigColumn}>Company</div>
            <div className={style.header_smallColumn}>Price</div>
            <div className={style.header_smallColumn}>Max</div>
            <div className={style.header_smallColumn}>Min</div>
            <div className={style.header_smallColumn}>Diff</div>
            <div className={style.header_smallColumn}>Diff,%</div>
            <div className={`${style.header_smallColumn} ${style.noBorder}`}>Date</div>
         </UiPageHeader>
         <div className={style.list_content}>
            <div className={style.card}>
               <div className={style.header_smallColumn}>1</div>
               <div className={style.header_bigColumn}>
                  <UiImage url='/images/logo.png' height='50px' className={style.card_logoImage}/>
                  Apple
               </div>
               <div className={style.header_smallColumn}>1000</div>
               <div className={style.header_smallColumn}>1500</div>
               <div className={style.header_smallColumn}>500</div>
               <div className={style.header_smallColumn}>1.57</div>
               <div className={style.header_smallColumn}>2</div>
               <div className={`${style.header_smallColumn} ${style.noBorder}`}>09.04</div>
            </div>
            <div className={style.list_footer}>
               <Paginations length={60} unitList={10} page={page} setPage={setPage}></Paginations>
            </div>
         </div>
      </div>
   )
}

export default StocksList