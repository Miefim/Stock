import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import debounce from 'lodash.debounce'
 
import { getStocks, Stock, stocksSelector, setStocks } from '../../redux/slices/stocksSlice'
import { getLogo, logoSelector, Logo } from '../../redux/slices/logoSlice'
import { useAppDispatch } from '../../redux/store'
import UiImage from '../../UI/Image'
import UiPageHeader from '../../UI/PageHeader'
import Paginations from '../PaginationBlock'
import Loader from '../../UI/Loader'
import style from './index.module.css'

const StocksList: React.FC = () => {
   const { stocks, isLoading, error } = useSelector(stocksSelector)
   const { logos, isLogosLoading } = useSelector(logoSelector)
   const [ page, setPage ] = useState<number>(1)
   const dispatch = useAppDispatch()
   
   useEffect(() => {
      dispatch(getStocks(''))
   },[])

   useEffect(() => {
      getLogoDebounce(page, stocks, logos)
   },[stocks, page])
   
   const getLogoDebounce = useCallback(
      debounce((page: number, stocks: Stock[] | null, logos: Logo) => {
         stocks?.forEach((stock, index) => {
            if((index < page * 10) && (index >= page * 10 - 10)){
               if(!logos[`${stock.symbol}`]){
                  dispatch(getLogo(stock.symbol))
               }
            }
         })
      }, 1000),
      [],      
   )

   const dragEndHandler = (result: DropResult) => {
      if(stocks){
         if(!result.destination) return

         const items = Array.from(stocks)
         const [reorderItem] = items.splice(result.source.index, 1)
         items.splice(result.destination.index, 0, reorderItem)
         dispatch(setStocks(items))
      }
   }  

   return(
      <div className={style.list}>
         <UiPageHeader className={style.list_header}>
            <div className={style.header_smallColumn}>№</div>
            <div className={style.header_bigColumn}>Company</div>
            <div className={style.card_indicatorBlock}>
               <div className={style.header_mediumColumn}>Symbol</div>
               <div className={style.header_mediumColumn}>Currency</div>
               <div className={style.header_mediumColumn}>Price</div>
               <div className={style.header_mediumColumn}>Change</div>
               <div className={style.header_mediumColumn}>Change,%</div>
               <div className={`${style.header_mediumColumn} ${style.noBorder}`}>Date</div>
            </div>
         </UiPageHeader>
         <DragDropContext onDragEnd={dragEndHandler}>
            <Droppable droppableId={style.list_content}>
               {(provided) => (
                  <div className={style.list_content} {...provided.droppableProps} ref={provided.innerRef}>
                     { isLoading && <div className={style.messageBlock}><Loader className={style.bigSmall}/></div>}
                     { error && <div className={style.messageBlock}>{error}</div>}
                     {
                        stocks?.map((stock, index) => {
                           if((index < page * 10) && (index >= page * 10 - 10)){
                              return(
                                 <Draggable key={index} draggableId={String(index)} index={index}>
                                    {(provided) => (
                                       <div className={style.card} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                          <div className={style.header_smallColumn}>{index + 1}</div>
                                          <div className={style.header_bigColumn}>
                                             {isLogosLoading
                                             ?  <Loader className={style.loaderSmall}/>  
                                             :
                                                <UiImage 
                                                   url={logos[stock.symbol] ? logos[stock.symbol] : ''} 
                                                   height='50px' 
                                                   width='50px' 
                                                   className={style.card_logoImage}
                                                />
                                             }
                                             {stock.companyName}
                                          </div>
                                          <div className={style.card_indicatorBlock}>
                                             <div className={style.header_mediumColumn}>{stock.symbol}</div>
                                             <div className={style.header_mediumColumn}>{stock.currency}</div>
                                             <div className={style.header_mediumColumn}>{stock.latestPrice}</div>
                                             <div className={`${style.header_mediumColumn} ${stock.change > 0 ? style.green : style.red}`}>{stock.change}</div>
                                             <div className={`${style.header_mediumColumn} ${stock.changePercent > 0 ? style.green : style.red}`}>{stock.changePercent?.toFixed(4)}</div>
                                             <div className={`${style.header_mediumColumn} ${style.noBorder}`}>{stock.latestTime}</div>
                                          </div>
                                       </div>
                                    )}
                                 </Draggable>
                              )
                           }
                        })
                     }
                     {provided.placeholder}
                     {
                        stocks &&
                        <div className={style.list_footer}>
                           <Paginations length={stocks.length} unitList={10} page={page} setPage={setPage}/>
                        </div>
                     }
                  </div>
               )}
            </Droppable> 
         </DragDropContext>
      </div>
   )
}

export default StocksList