import style from './index.module.css'

type UiPageProps = {
   children: JSX.Element | JSX.Element[]
   className?: string
}

const UiPage: React.FC<UiPageProps> = ({ children, className }) => {
   return(
      <div className={`${style.page} ${className}`}>
         {children}
      </div>
   )
}

export default UiPage