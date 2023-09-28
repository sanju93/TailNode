import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store";
let { Provider } = require("react-redux");

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="fluid-container bg-primary">
          <div className="text-center h3 p-3 fw-bold text-light">Todo-App</div>
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
