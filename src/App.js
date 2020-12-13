import './App.css';
import { ImageSlider } from './ImageSlider';
import ImageSliderData from './data.json';
function App() {
  return (
    <div className="App">
      <h1>Image slider</h1>
      <ImageSlider slides={ImageSliderData} />
    </div>
  );
}

export default App;
