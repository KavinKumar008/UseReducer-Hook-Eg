import React, { useReducer } from 'react'

const initialState=[
    {id:1,name:"book"},
    {id:2,name:"book"}
];

function reducer(state,action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state,{id:Date.now(),name:action.payload}];
        case "REMOVE_ITEM":
            return state.filter((item)=>item.id!==action.payload);
        case "UPDATE_ITEM":
            return state.map((item)=>(item.id===action.payload.id?{...item,
                name:action.payload.newName} :item));
        default:
            return state;        
    }
}

const ReducerApp = () => {

    const [items,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
        <h2>Product List</h2>
        <button onClick={()=>dispatch({type:"ADD_ITEM"
            ,payload:prompt("Enter item name")})}>Add Item</button>
        <ul>
            {items.map((item)=>{
                <li key={item.id}>
                    {item.name}
                <button onClick={()=>dispatch({type:"UPDATE_ITEM"
            ,payload:{id:item.id,newName:prompt("Enter item name")}})}>Update</button>
                <button onClick={()=>dispatch({type:"REMOVE_ITEM"
            ,payload:item.id})}>Delete</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ReducerApp