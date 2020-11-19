import imageInSrc from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
    <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
        
        <h1 class="title red"> My first steps in React ^^ </h1>
        <br></br>
        <img src={imageInSrc} />
        <br></br>
        <img src="/imageInPublic.jpg" />
        <br></br>
        <video src="myVideo.mp4" type="video/mp4" width="320" height="240" controls>
        </video>

    </div>

  );
}

export default App;



  
  