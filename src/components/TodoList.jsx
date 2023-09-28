import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../redux/reducers/todoReducer";
import style from './TodoList.module.css';

const TodoList = () => {
  let todos = useSelector((state) => state.todoReducer.todos);
  let dispatch = useDispatch();
 

  function handleToggle(index) {
    dispatch(todoActions.toggle(index));
  }

  return (
    <>
      <div className="container">

       <div className="row border border-2 rounded-2 my-3 bg-dark py-3">
        <div className="col-5 text-light fw-bold">ToDo</div>
        <div className="col-4 text-light fw-bold">
          Status
        </div>
        <div className="col-3 text-light fw-bold">
          Toggle
        </div>
       </div>

        {todos.map((item, index) => (
          <div className={`row my-4 border border-2 rounded ${style.cards}`} key={index}>
            <div className="col-4 fw-bold fs-4">{item.text}</div>
            {item.completed ? (
              <div className="col-4">
                <div className="p fw-bold bg-success text-light text-center fs-4">
                  Completed
                </div>
              </div>
            ) : (
              <div className="col-4">
                <div className="p fw-bold bg-secondary text-light text-center fs-4">
                  Pending
                </div>
              </div>
            )}

            {item.completed ? (
              ""
            ) : (
              <div className="col-4">
                <button
                  className="btn btn-warning fw-bold "
                  onClick={() => handleToggle(index)}
                >
                  Click to complete Todo
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
