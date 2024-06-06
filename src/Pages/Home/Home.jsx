import Hero from '../../Components/Hero/Hero'
import HomeSection01 from '../../Components/HomSections/HomeSection01'
import HomeSection02 from '../../Components/HomSections/HomeSection02'
import HomeSection03 from '../../Components/HomSections/HomeSection03'
import ContactForm from '../../Components/ContactForm/ContactForm'
import HomeCard  from '../../Components/HomeCard/HomeCard'
const Home = () => {
  return (
    <div>
      <Hero />
      <HomeSection01 />
      <HomeSection02 />
      <HomeSection03 />
      <HomeCard />
      <ContactForm />
    </div>
  )
}

export default Home