import React, {useState, useEffect} from 'react'
import Input from "./components/Input"
import List from "./components/List"
import Filter from "./components/Filter"
import Header from "./components/Header"
// import Footer from "./components/Footer"
import uuid from "react-uuid"
function App() {
  const [inputText, setInputText] = useState("")
  const [todoItems, setTodoItems] = useState(()=>JSON.parse(localStorage.getItem("storedTodo")) || [])
  const [darkMode, setDarkMode] = useState(()=>JSON.parse(localStorage.getItem("theme")))  
  const [todoList, setTodoList] = useState(todoItems)
  const [active, setIsActive] = useState("all")
  useEffect(()=>
    localStorage.setItem("storedTodo", JSON.stringify(todoItems))
  , [todoItems])
  useEffect(()=>
    localStorage.setItem("theme", JSON.stringify(darkMode)),
  [darkMode]
  )
  useEffect(()=>{
    if(darkMode === false){
      return document.body.classList.add('light')
    }
    else{
      return document.body.classList.remove('light')
    }
  }, [darkMode])

  useEffect(()=>{
    setTodoList(todoItems)
  },[todoItems])
  
  function handleChange(e){
        const newValue = e.target.value 
        setInputText(newValue)
  }

  function boxChange(id){
    setTodoItems(todoItems.map(item=> item.id === id?
             {...item, isChecked: !item.isChecked }:
             item))
    console.log(todoItems)
  }

  function addItem(){
    const newTodo ={id:uuid(), todo: inputText, isChecked: false}
    console.log(newTodo)
    inputText !=="" && setTodoItems(prevTodo=>[...prevTodo, newTodo])
    setInputText("")
  }

  function deleteItem(id){
    setTodoItems(prevItems => {
      return prevItems.filter((items) => {
        return id !== items.id
      });
    });
  }

  function clearCompleted(){
    setTodoItems(prevItems=>prevItems.filter(item=> item.isChecked === false))
    console.log(todoList)
  }

  function handleAll(){
    setTodoList(todoItems)
    setIsActive("all")
    console.log(todoList)
  }

  function handleActive(){
    setTodoList(todoItems.filter(
      item => item.isChecked === false
    ))
    console.log(todoList)
    setIsActive("active")
  }

  function handleCompleted(){
    setTodoList(todoItems.filter(
      item => {
        return item.isChecked === true}
    ))
    console.log(todoList)
    setIsActive("completed")
  }

  function toggleMode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="App">
      <Header 
        darkMode={darkMode}
        toggle={toggleMode}
      />
     <Input 
        change={handleChange} 
        add={addItem}
        val={inputText}
        darkMode={darkMode}
      />
      <List 
        change={boxChange}
        text={inputText}
        todo={todoList}
        darkMode={darkMode}
        deleteItem={deleteItem}
      />
      <Filter
        todo={todoItems}
        darkMode={darkMode}
        activeBtn={active}
        all={handleAll}
        active={handleActive}
        clear={clearCompleted}
        complete={handleCompleted}
      />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
