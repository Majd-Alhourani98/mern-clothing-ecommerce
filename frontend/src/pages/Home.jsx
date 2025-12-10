import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollecton from '../components/latestCollecton';
import NewsLetterBox from '../components/NewsLetterBox';
import OurPolicy from '../components/OurPolicy';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollecton />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
