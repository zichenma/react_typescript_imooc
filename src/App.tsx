import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import './App.css';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
// import withLoader from './components/withLoader';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message: string;
  status: string;
}
// const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
//   return (
//     <>
//       <h2>Dog show: {data.status}</h2>
//       <img src={data.message} />
//     </>
//   )
// }
function App() {
  const [show, setShow] = useState(true);
  const positions = useMousePosition();
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random');
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show]);
  const dogResult = data as IShowResult;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => {setShow(!show)}}>Refresh dog photo</button>
        </p>
        {loading ? <p>🐶 Loading...</p> : <img src={dogResult && dogResult.message}/>}
        {/* { show &&   <MouseTracker />} */}
        <p>X: {positions.x}, Y: {positions.y}</p>
        {/* <WrappedDogShow /> */}
        <LikeButton />
        <Hello message="Hello World 2"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
