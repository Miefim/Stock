import style from './index.module.css'

type UiPageContentProps = {
   children: JSX.Element[] | JSX.Element
}

const UiPageContent: React.FC<UiPageContentProps> = ({ children }) => {
   return(
      <div className={style.content}>
         {children}
      </div>
   )
}

export default UiPageContent