import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollecton from '../components/latestCollecton';
import OurPolicy from '../components/OurPolicy';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollecton />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;
