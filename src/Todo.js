import React from 'react'
import { useState } from 'react';

export default function Todo() {

    const [list,setValues] = useState([]);
    const [todo,setTodo] = useState("");

    function addValues()
    {
        // setValues([...list,todo])        //this will work asynchronously:it will take time to update

        if (todo.trim() === "") return;
        setValues((listitem)=> {
            const updatedlist = [...list,todo];
            setTodo('');
            return updatedlist;
        })
        console.log(list);
    }

    function removeValues(i){
        setValues(list => list.filter((item,id) => i!== id));
    }

    function clearValues(){
        setValues([])
    }

  return (
    <div className="App">
      <div className="header">Shopping List</div>

      <div className='new'>
        <input type='text' placeholder='Enter item name' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button className='add' onClick={addValues}>Add Item</button>
      </div>
      
      <div className='list'>
        <ul>
            {list!=[] && list.map((item,id)=>
                <li key={id}>
                    {item}
                    <button className='remove' onClick={()=>removeValues(id)}>Remove</button>
                </li>
            )}
        </ul>
        {list.length>=1 && <button className='clear' onClick={clearValues}>Clear List</button>}
      </div>      
    </div>
  )
}
