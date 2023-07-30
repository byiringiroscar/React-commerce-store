import back from '../assets/back.png';
import next from '../assets/forward.png';
import laptop from '../assets/msi_laptop.png';
import '../css/hompepage.css';

const HomePage = () => (
  <div className="product-section">
    <span className="back">
      <img src={back} alt="" />
    </span>
    <div className="product-container">
      <div className="product">
        <img src={laptop} alt="" />
        <p><strong>$19,00</strong></p>
        <p>MSI GL65 Leopard</p>
      </div>
    </div>
    <span className="forward">
      <img src={next} alt="" />
    </span>
  </div>
);

export default HomePage;
