import style from './layout.module.scss'

export default function Layout ({children, bg_color}) {

    return (
        <div style={{background : `${bg_color ? bg_color : "transparent"}`}} className={style.wrapper}>
            {children}
        </div>
    )
}