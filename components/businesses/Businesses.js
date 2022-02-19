import { useState } from "react";
import ContentWidth from "../contentWidth/ContentWidth";
import Layout from "../layout/Layout";
import style from "./busi.module.scss";

const businessesData = [
  {
      name: "Dunes",
      logo : "https://www.dunesgst.fr/assets/logo/logo.svg",
      illustration: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      infos : {
          creation: "22/11/1996",
          city : "Le Mans",
          website : "https://www.dunesgst.fr",
          facebook : "facebook.com",
          instagram : "instagram"
        },
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. Fusce sed eros gravida, maximus sem vitae, venenatis felis. Cras posuere odio non finibus aliquet. Aliquam mattis lectus at tincidunt maximus. Mauris porttitor felis rhoncus, imperdiet nibh consectetur, consectetur enim. In hac habitasse platea dictumst. Integer ornare sem nec ullamcorper volutpat. Aenean et imperdiet purus. Ut placerat eu mi vitae feugiat. Sed ultricies risus vel egestas egestas. Cras eleifend condimentum congue. Duis mollis erat leo, ut tempus urna vulputate quis. Nulla at sem eget leo vehicula mollis ut in lectus."
    },
    {
      name: "Crêche",
      logo : "https://www.dunesgst.fr/assets/logo/logo.svg",
      illustration: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      infos : {
          creation: "22/11/1996",
          city : "Le Mans",
        website : "https://www.dunesgst.fr",
        facebook : "facebook.com",
        instagram : "instagram"
    },
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. Fusce sed eros gravida, maximus sem vitae, venenatis felis. Cras posuere odio non finibus aliquet. Aliquam mattis lectus at tincidunt maximus. Mauris porttitor felis rhoncus, imperdiet nibh consectetur, consectetur enim. In hac habitasse platea dictumst. Integer ornare sem nec ullamcorper volutpat. Aenean et imperdiet purus. Ut placerat eu mi vitae feugiat. Sed ultricies risus vel egestas egestas. Cras eleifend condimentum congue. Duis mollis erat leo, ut tempus urna vulputate quis. Nulla at sem eget leo vehicula mollis ut in lectus."
    
},
{
    name: "Basketball",
    logo : "https://www.dunesgst.fr/assets/logo/logo.svg",
    illustration: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    infos : {
        creation: "22/11/1996",
        city : "Le Mans",
        website : "https://www.dunesgst.fr",
        facebook : "facebook.com",
        instagram : "instagram"
    },
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. Fusce sed eros gravida, maximus sem vitae, venenatis felis. Cras posuere odio non finibus aliquet. Aliquam mattis lectus at tincidunt maximus. Mauris porttitor felis rhoncus, imperdiet nibh consectetur, consectetur enim. In hac habitasse platea dictumst. Integer ornare sem nec ullamcorper volutpat. Aenean et imperdiet purus. Ut placerat eu mi vitae feugiat. Sed ultricies risus vel egestas egestas. Cras eleifend condimentum congue. Duis mollis erat leo, ut tempus urna vulputate quis. Nulla at sem eget leo vehicula mollis ut in lectus."
  
},
{
    name: "DunesCIty",
    logo : "https://www.dunesgst.fr/assets/logo/logo.svg",
    illustration: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    infos : {
        creation: "22/11/1996",
        city : "Le Mans",
        website : "https://www.dunesgst.fr",
        facebook : "facebook.com",
        instagram : "instagram"
    },
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. Fusce sed eros gravida, maximus sem vitae, venenatis felis. Cras posuere odio non finibus aliquet. Aliquam mattis lectus at tincidunt maximus. Mauris porttitor felis rhoncus, imperdiet nibh consectetur, consectetur enim. In hac habitasse platea dictumst. Integer ornare sem nec ullamcorper volutpat. Aenean et imperdiet purus. Ut placerat eu mi vitae feugiat. Sed ultricies risus vel egestas egestas. Cras eleifend condimentum congue. Duis mollis erat leo, ut tempus urna vulputate quis. Nulla at sem eget leo vehicula mollis ut in lectus."
    
},
{
    name: "Gîte",
    logo : "https://www.dunesgst.fr/assets/logo/logo.svg",
    illustration: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    infos : {
        creation: "22/11/1996",
        city : "Le Mans",
        website : "https://www.dunesgst.fr",
        facebook : "facebook.com",
        instagram : "instagram"
    },
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum elementum pulvinar. Fusce sed eros gravida, maximus sem vitae, venenatis felis. Cras posuere odio non finibus aliquet. Aliquam mattis lectus at tincidunt maximus. Mauris porttitor felis rhoncus, imperdiet nibh consectetur, consectetur enim. In hac habitasse platea dictumst. Integer ornare sem nec ullamcorper volutpat. Aenean et imperdiet purus. Ut placerat eu mi vitae feugiat. Sed ultricies risus vel egestas egestas. Cras eleifend condimentum congue. Duis mollis erat leo, ut tempus urna vulputate quis. Nulla at sem eget leo vehicula mollis ut in lectus."
  
  },
];

export default function Businesses() {

    const [viewBusiness, setViewBusiness] = useState(0)

  const Menu = () => {
    return (
      <div className={style.menu}>
        <h1>
          Find out all my
          <span>businesses</span>
        </h1>
        
        <ul>
            {businessesData.map((el, i) => {
                return <li onClick={() => setViewBusiness(i)}>{el.name}</li>
            })}
        </ul>
      </div>
    );
  };

  const BusinessInformations = () => {
      const activeBusiness = businessesData[viewBusiness]
      const {creation, city, website, facebook, instagram} = activeBusiness.infos


    return (
        <article className={style.business_info}>
            <img className={style.logo} src={activeBusiness.logo}/>
            <img className={style.banner} src={activeBusiness.illustration}/>
            <h1>
                {activeBusiness.name}
            </h1>
            <div className={style.infos}>
            <ul>
                <li>
                    Created on : {creation}
                </li>
                <li>
                    Location : {city}
                </li>
                <li>
                    Website : <a onClick={() => window.open(website)}>{website}</a>
                </li>
            </ul>
            <p>{activeBusiness.desc}</p>
            </div>
        </article>
    )
  }

  return (
    <Layout>
      <ContentWidth>
          <div className={style.flex}>
          <Menu/>
          <BusinessInformations/>
          </div>
      </ContentWidth>
    </Layout>
  );
}
