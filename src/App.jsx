import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import reactLogo from './assets/react.svg'
function App() {
  const name = "Quang Linh";
  const age = 26;
  const data = {
    address: "HaNoi",
    country: "vietnam"
  }

  return (
    <div className="container text-center">
      <div className="text-danger">Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-img'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
