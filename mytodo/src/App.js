import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import TodoList from './Todolist'
import Login from './Login'
import Logout from './Logout'
import Registration from './Registration'


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/

function App() {
    const todos = [
        {
            title: "eat breakfast",
            description: "egg, milk, bread",
            dateCreated: "2021/09/28 9:30",
            complete: true,
            dateCompleted: "2021/09/28 10:00"
        },
        {
            title: "eat lunch",
            description: "rice, chicken, milk, fried broccoli",
            dateCreated: "2021/09/28 12:00",
            complete: true,
            dateCompleted: "2021/09/28 13:00"
        },
        {
            title: "eat dinner",
            description: "noodle, grilled steak",
            dateCreated: "2021/09/28 19:00",
            complete: false,
            dateCompleted: ""
        },
    ]
    return (
        <div className="Root">
            <Login />
            <hr/>
            <Registration />
            <hr/>
            <Logout user="bobo"/>
            <hr/>
            <form onSubmit={e => e.preventDefault()}>
                Add Todo:
                <br/>

                <label htmlFor="todo-title">title: </label>
                <input type="text" id="todo-title" name="todo-title" />
                <br/>

                <label htmlFor="todo-desc">description: </label>
                <textarea id="todo-desc" name="todo-desc" />
                <br/>


                <button type="submit" name="create">create</button>
            </form>
            <hr/>
            <TodoList todos={todos} />
        </div>
    )
}
export default App;
