import React,{useState} from 'react'
import "./StateApp.css"

const StateApp = () => {

    const [items, setItems] = useState([]);

    const addItem=(itemName)=>{
        setItems([...items,{id:Date.now(),name:itemName}])
    }

    const removeItem=(id)=>{
       setItems(items.filter(item=>item.id!==id));
    }

    const updateItem=(id,itemName)=>{
        setItems(items.map((item)=>(item.id===id?{...item,name:itemName}:item)))
    };
  return ( 
    <div className='container'>
        <h2>Product List</h2>
        <button className='addBtn' onClick={()=>addItem(prompt("Enter item name"))}>Add Item</button>
        <ul className='list'>
            { items.map((item)=>
            <li key={item.id}>{item.name}
            <button className='updateBtn' onClick={()=>updateItem(item.id,prompt("Enter item name",item.name))}>Update</button>
            <button className='deleteBtn' onClick={()=>removeItem(item.id)}>Delete</button>
            </li>)}
        </ul>
    </div>
  )
}

export default StateApp