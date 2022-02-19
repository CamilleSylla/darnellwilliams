import About from "../components/about/about";
import Banner from "../components/banner/Banner";
import Businesses from "../components/businesses/Businesses";
import Strength from "../components/strength/Strength";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Strength/>
      <Businesses/>
    </div>
  )
}
