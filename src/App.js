import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }
  // eslint-disable-next-line
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  // eslint-disable-next-line
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>To Do List</h1>
          <br />
          <input type='text' placeholder='Add a items'
            value={inputList}
            onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>


          <ol>

            {items.map((itemval, index) => {
              return <ToDoLists key={index} id={index}
                text={itemval}
                onSelect={deleteItems} />
            })}
          </ol>
        </div>

      </div>



    </>

  );
}

export default App;
