import { useEffect, useRef } from 'react'
import Layout from '../layout/Layout'
import style from './banner.module.scss'

export default function Banner () {
    const darnellRef = useRef()
    const bg1 = useRef()
    const bg2 = useRef()


    const Wave = () => {
        return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2C3E50" fillOpacity="1" d="M0,128L26.7,160C53.3,192,107,256,160,261.3C213.3,267,267,213,320,208C373.3,203,427,245,480,229.3C533.3,213,587,139,640,133.3C693.3,128,747,192,800,218.7C853.3,245,907,235,960,229.3C1013.3,224,1067,224,1120,218.7C1173.3,213,1227,203,1280,208C1333.3,213,1387,235,1413,245.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>        )
    }

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
            <Wave/>
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