import style from './index.module.css'

type UiPageHeaderProps = {
   children: JSX.Element[] | JSX.Element
   className?: string
}

const UiPageHeader: React.FC<UiPageHeaderProps> = ({ children, className }) => {
   return (
      <div className={`${style.header} ${className}`}>
         {children}
      </div>
   )
}

export default UiPageHeader