import logo from './Assets/github.svg'
import style from './header.module.css'

   const Header=()=>{
    return (
        <div className={style['nav-bar']}>
            <div className={style['title']}>React Mini Project</div>
            <img src={logo} alt="logo" />
        </div>
    )
   }

export default Header