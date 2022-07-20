import './App.css';
import Likes from './Likes';
import Comments from './redux/Comments';
import Title from './redux/Title';


function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes />
            
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
