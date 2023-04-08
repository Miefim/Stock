import style from './index.module.css'

type NavButtonProps = {
   children: JSX.Element[]
   onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const NavButton: React.FC<NavButtonProps> = ({children, onClick}) => {
   return (
      <button className={style.button} onClick={onClick}>
         {children}
         <div className={style.button_line}></div>
      </button>
   )
}

export default NavButton