import BubbleWrapper from './components/BubbleWrapper';
import './App.css';


function App() {


  return (
    <div className="App">

      <svg className='svg-blur' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" version="1.1">
        <defs>
            <filter id="goo" color-interpolation-filters="sRGB">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                <feBlend/>
          
                </filter>
        </defs>
      </svg>

      <BubbleWrapper/>

      <div className='color-bar'>
        <span>Welcome to my website!</span>
      </div>

      <nav className='navbar'>
        <span className='navbar-logo'>logo</span>
        <button className='navbar-contact'>contact</button>
      </nav>

    <header className='main'>
      <div className='greeting'>
        <span className='title'>Hi, I'm Nick</span>
        <span className='details'>Self-taught web developer, business student, and weightlifting enthusiast.</span>
      </div>

      <div className='control-panel'>
        <div className='control-previous'>&lt;</div>
        <div className='control-next'>&gt;</div>
      </div>
    </header>

    </div>
  );
}

export default App;
