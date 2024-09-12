import React,{useReducer} from 'react'

const initialState=[
    {id:1,name:"writing"},
    {id:2,name:"playing"}
];

const TODOS_ACTIONS={
    ADD_TASK:"ADD_TASK",
    DELETE_TASK:"DELETE_TASK",
}

function reducer(state,action){
     switch(action.type){
        case TODOS_ACTIONS.ADD_TASK:
            console.log("adding")
            return [...state,{id:state.length+1,name:action.payload}];
        case TODOS_ACTIONS.DELETE_TASK:
            return state.filter((task)=>task.id!==action.payload)    
        default:
            return state;    
     }
}

function init(initialState){
    // const data=[...initialState,{id:1,name:"reading"}]
    // return data;
    return initialState;
}

const Todos = () => {

    const [todos,dispatch]=useReducer(reducer,initialState,init);

    const addTask = (e)=>{
        if(e.key==="Enter"){
            dispatch({type:TODOS_ACTIONS.ADD_TASK,payload:e.target.value})
        }
    }

    // const deleteTask=(id)=>{
    //     dispatch({type:"DELETE_TASK",payload:id})
    // }
  return (
    <>
    <h3>Task List {todos.length}</h3>
    <label htmlFor="task">Enter Task</label>
    <input type="text" id='task' onKeyDown={(e)=>addTask(e)} />

    <ul>
        {
            todos.map((todo)=>
            <li key={todo.id}>
                {todo.name}
                <button onClick={()=>dispatch({type:TODOS_ACTIONS.DELETE_TASK,
                  payload:todo.id
                  })}>Delete</button>
                </li>
            )
        }
    </ul>
    </>
  )
}

export default Todos