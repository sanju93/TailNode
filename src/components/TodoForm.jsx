import { useState , useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { todoActions } from "../redux/reducers/todoReducer";
const TodoForm = () => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todoReducer.todos)
  useEffect(() => {
    if (todos.length !== 0){
      localStorage.setItem('todos',JSON.stringify(todos));
    }else{
      let todo = localStorage.getItem('todos');
      if (todo){
        dispatch(todoActions.addAll(JSON.parse(todo)));
      }
    }
   
  },[todos]);

  const handleAddToDo = () => {
    if (text){
    dispatch(todoActions.add(text))
    
    setText("");
    }else{
       alert("Please add the todo first");
    }
   
    
    
   
  
  };
  const handleClearTodos = () => {
    dispatch(todoActions.clearToDo());
    localStorage.removeItem('todos');
    alert("All ToDos Cleared");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="write todo here..."
              className="form form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>
          <div className="col-2">
            <button className="btn btn-success" onClick={handleAddToDo}>
              Add To Do
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-danger" onClick={handleClearTodos}>
              Reset Todos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
