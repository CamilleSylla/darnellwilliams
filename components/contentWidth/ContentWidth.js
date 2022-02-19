import style from './contentwidth.module.scss'

export default function ContentWidth ({children}) {

    return (
        <section className={style.wrapper}>
            {children}
        </section>
    )
}