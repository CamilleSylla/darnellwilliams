import ContentWidth from "../contentWidth/ContentWidth";
import Layout from "../layout/Layout";
import style from "./strength.module.scss";

const cardsData = [
  {
    title: "Strength",
    icon: "/assets/icons/wallet.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. ",
  },
  {
    title: "Strength",
    icon: "/assets/icons/wallet.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. ",
  },
  {
    title: "Strength",
    icon: "/assets/icons/wallet.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. ",
  },
];

export default function Strength() {
  const SectionTitle = () => {
    return (
      <div className={style.title}>
        <h1>
          Take a look at my strength
          <span>Strengths</span>
        </h1>
      </div>
    );
  };

  const CardGrid = () => {
    return (
      <div className={style.grid}>
        {cardsData.map((el, i) => {
          return (
            <article className={style.card}>
                <div className={style.background}/>
              <div className={style.container}>
                  <img src={el.icon}/>
                <h1>{el.title}</h1>
                <p>
                    {el.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <Layout bg_color="#2C3E50">
      <ContentWidth>
          <div className={style.flex}>
        <SectionTitle />
        <CardGrid />
          </div>
      </ContentWidth>
    </Layout>
  );
}
