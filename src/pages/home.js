import Navbar from '../components/navbar';
import Header from '../components/Header';
import Logos from '../components/logos';
import ContentRight from '../components/contentRight';
import ContentLeft from '../components/contentLeft';
import Amanda from '../components/amanda';
import ContactUs from '../components/contactUs';
import Footer from '../components/footer';

const Home = ()=> {
  return (
    <>
      <Navbar/>
      <Header />
      <Logos />
      <ContentRight imgUrl={'cube-right.png'} altTxt={'cube-right.png'} />
      <ContentLeft imgUrl={'gradient gel.png'} altTxt={'gradient gel.png'} />
      <Amanda />
      <ContentRight imgUrl={'pink-cube.png'} altText={'pnk-cube.png'} />
      <ContentLeft imgUrl={'pink-gel.png'} altTxt={'pink-gel.png'} />
      <ContactUs/>
      <Logos />
      <Footer />
    </>
  );
}

export default Home;