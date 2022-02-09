import { useEffect, useRef } from 'react'
import Layout from '../layout/Layout'
import style from './banner.module.scss'

export default function Banner () {
    const darnellRef = useRef()
    const bg1 = useRef()
    const bg2 = useRef()


    useEffect(() => {
        const darnellImgWidth = darnellRef.current.offsetWidth
        const bg1Width = bg1.current.offsetWidth
        const windowWidth = window.innerWidth
        const darnellPositionLeft = bg1Width - (darnellImgWidth / 2)
        darnellRef.current.style.left = `${darnellPositionLeft}px`
        console.log(darnellImgWidth, bg1Width, windowWidth, darnellPositionLeft);
    }, [])

    return (
        <div className={style.container}>
            <div className={style.backgrounds}>
            <div ref={bg1} className={style.bg1}/>
            <div ref={bg2} className={style.bg2}/>
            <img ref={darnellRef} className={style.darnell} src="/assets/img/darnell.png"/>
            </div>
            <section className={style.wrapper}>
               <article className={style.content}>
                   <h1>Hello my name is <span>Darnell <span>Williams</span></span></h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit eget massa id eleifend. Quisque eros felis, lobortis sit amet tincidunt in,</p>
                   <button>View Portfolio</button>
               </article>
               <div className={style.illustration}></div>
            </section>
        </div>
    )
}