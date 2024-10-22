import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //Cách viết thông thường 
  // function myFunction() {
  //   console.log("My Function >>>>");

  // }

  //Cách viết arrown Function
  const myFunction = () => {
    console.log("My Function >>>");

  }
  myFunction();

  //Đây là dạng component chữ cái đầu phải viết hoa đó là quy tắc của React
  //component = html + css + js
  //Trong thế giới của Javascript tất cả đều là function , để biến nó thành 1 component bắt buộc chúng ta cần return ra HTML
  const MyComponent = () => {
    return (
      <div>Quang Linh</div>
    )
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <MyComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
