import Carousel from 'react-multi-carousel';
import '../css/hompepage.css';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import laptoptwo from '../assets/lap2.png';

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
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

  const productData = [
    {
      id: 1,
      imageurl: laptoptwo,
      name: 'MSI LAPTOP Leopard',
      price: '$1400',
    },
    {
      id: 2,
      imageurl: laptoptwo,
      name: 'HP OMEN',
      price: '$1400',
    },
    {
      id: 3,
      imageurl: laptoptwo,
      name: 'AZUS',
      price: '$1400',
    },
    {
      id: 4,
      imageurl: laptoptwo,
      name: 'TOSHIBA',
      price: '$1400',
    },
    {
      id: 5,
      imageurl: laptoptwo,
      name: 'RENNOVA',
      price: '$1400',
    },
    {
      id: 6,
      imageurl: laptoptwo,
      name: 'DELL',
      price: '$1400',
    },
    {
      id: 7,
      imageurl: laptoptwo,
      name: 'MAC PRO',
      price: '$1400',
    },
    {
      id: 8,
      imageurl: laptoptwo,
      name: 'SAMSUNG',
      price: '$1400',
    },
  ];
  return (
    <div className="product-section">
      <Carousel
        showDots
        responsive={responsive}
      >
        {productData.map((product) => (
          <Product
            key={product.id}
            imageurl={product.imageurl}
            name={product.name}
            price={product.price}
          />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default HomePage;
