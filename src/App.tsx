import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={(e) => { e.preventDefault(); alert(1)}}
          size={ButtonSize.small}>small</Button>
        <Button>Hello</Button>
        <Button disabled>Hello</Button>
        <Button size={ButtonSize.Large}>Large</Button>
        <Button
          btnType={ButtonType.Danger}
        >Danger</Button>
        <Button
          disabled
          btnType={ButtonType.Primary}
        >disabled Hello</Button>
        <Button
          disabled
          btnType={ButtonType.Link}
          href="http:/baidu.com">
          disabled Link Button
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="http:/baidu.com">
          Link Button
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
