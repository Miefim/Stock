import style from './index.module.css'

type UiPopupProps = {
   children: string | JSX.Element | JSX.Element[]
   className?: string
}

const UiPopup: React.FC<UiPopupProps> = ({ children, className }) => {
   return(
      <div className={`${style.popup} ${className}`}>
         <div className={style.popup_content}>
            {children}
            <div className={style.content_arrow}/>
         </div>
      </div>
   )
}

export default UiPopup