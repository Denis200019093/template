import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import Shop from './components/Shop/index.js';
import Slider from './components/Slider/index.js';
import AboutUs from './components/AboutUs/index.js';
import { bestSellersProducts, newProducts, reviewsData } from './data.js';

const App = () => {
  return (
    <MainLayout>
      <Shop />
      <AboutUs />
      <Slider sliderData={bestSellersProducts} title={'Хіти продажів'} />
      <Slider sliderData={newProducts} title={'Наші новинки'} />
      <Slider sliderData={reviewsData} title={'Відгуки'} type="reviews" />
    </MainLayout>
  );
};

export default App;
