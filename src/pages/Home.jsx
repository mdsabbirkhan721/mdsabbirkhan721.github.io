import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Newsletter from '../components/Newsletter';
import Trending from '../components/Trending';
import Shirt from '../components/Shirt';
import Punjabi from '../components/Punjabi';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Trending />
      <Shirt />
      <Punjabi></Punjabi>
      <Contact></Contact>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
