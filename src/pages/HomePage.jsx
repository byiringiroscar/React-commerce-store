// import back from '../assets/back.png';
import Carousel from 'react-multi-carousel';
// import next from '../assets/forward.png';
import laptop from '../assets/msi_laptop.png';
import laptoptwo from '../assets/lap2.png';
import '../css/hompepage.css';
import 'react-multi-carousel/lib/styles.css';

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="product-section">
      <Carousel responsive={responsive}>
        <div className="product">
          <div className="circle">
            <img className="product-img" src={laptop} alt="" />
          </div>
          <p><strong>$19,00</strong></p>
          <p>MSI GL65 Leopard</p>
        </div>
        <div className="product">
          <div className="circle">
            <img className="product-img" src={laptoptwo} alt="" />
          </div>
          <p><strong>$19,00</strong></p>
          <p>MSI GL65 Leopard</p>
        </div>
        <div className="product">
          <div className="circle">
            <img className="product-img" src={laptop} alt="" />
          </div>
          <p><strong>$19,00</strong></p>
          <p>MSI GL65 Leopard</p>
        </div>
        <div className="product">
          <div className="circle">
            <img className="product-img" src={laptoptwo} alt="" />
          </div>
          <p><strong>$19,00</strong></p>
          <p>MSI GL65 Leopard</p>
        </div>
        <div className="product">
          <div className="circle">
            <img className="product-img" src={laptop} alt="" />
          </div>
          <p><strong>$19,00</strong></p>
          <p>MSI GL65 Leopard</p>
        </div>
        <div className="product">
          <div className="circle">
            <img className="product-img" src={laptoptwo} alt="" />
          </div>
          <p><strong>$19,00</strong></p>
          <p>MSI GL65 Leopard</p>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default HomePage;
