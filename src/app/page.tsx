import { BlackBandMarquee } from './home/partials/black-band';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import ProfileSummary from './home/partials/profile-summary';

const Home = () => {
  return (
    <div className='h-[200vh]'>
      <Navbar />
      <Hero />
      <BlackBandMarquee />
      <ProfileSummary />

      {/* <div className='bg-primary-100 mx-auto mt-50 box-border h-100 w-100 border' /> */}
    </div>
  );
};

export default Home;
