import UiImage from "../../UI/Image"
import Navigate from "../Navigate"
import style from './index.module.css'

const Header: React.FC = () => {
   return (
      <header className={style.header}>
         <div className={style.logoConteiner}>
            <UiImage url="/images/logo.png" height={'100px'}/>
            <h1>Super Stocks</h1>
         </div>
         <Navigate/>
      </header>
   )
}

export default Header