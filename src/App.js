import './App.css';
import image from "./imageInSrc.jpg"



function App() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={image} alt="Logo" width={320} height={240}/>
        <br />
        <img src="/imageInPublic.jpg" alt="Logo" width={320} height={240}/>
      </div>
      <video controls width={320} height={240}>
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
