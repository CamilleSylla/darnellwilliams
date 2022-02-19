import ContentWidth from '../contentWidth/ContentWidth'
import Layout from '../layout/Layout'
import style from './about.module.scss'

export default function About () {

    const Illustrations = () => {
        return (
            <div className={style.illustrations}></div>
        )
    }

    const Content = () => {
        return (
            <article className={style.about}>
                <span className={style.intro}>Let me introduce myself</span>
                <h1>About me</h1>
                <h2>Find a title that describes the text below</h2>
                <p>In this Area we are suppose to talk about you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit eget massa id eleifend. Quisque eros felis, lobortis sit amet tincidunt in,</p>

                <h3>Contact</h3>
                <p>Say something sweet or fun to make people contact you <a>darnell@email.com</a></p>
                <button>My Businesses</button>
            </article>
        )
    }

    return (
        <Layout bg_color="#2C3E50">
            <ContentWidth>
                <div className={style.wrapper}>
                    <Illustrations/>
                    <Content/>
                </div>
            </ContentWidth>
        </Layout>
    )
}