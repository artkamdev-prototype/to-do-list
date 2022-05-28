import React, { useState } from 'react'
import './App.css';
import Header from './components/header/header';
import CategoriesList from './components/list/categoriesList';
import TasksList from './components/list/tasksList';
import ToDoList from './components/ToDoList';

const App = () => {
  const themes = [
    { id: 0, background: "red", color: "green", text: "Default" },
    { id: 1, background: "green", color: "red", text: "Blueprint" },
    { id: 2, background: "green", color: "red", text: "Cheese" },
    { id: 3, background: "green", color: "red", text: "Prinzes" },
  ]
  //
  const [selectTheme, setSelectTheme] = useState(0)
  //
  const [categories, setCategories] = useState(
    [
      { id: 0, text: "Business", tasks: [0,1,2]},
      { id: 1, text: "WBS-Fullstack", tasks: [3]},
      { id: 2, text: "2022-05-27", tasks: [4]},
    ]
  )
  //
  const [selectCategorie, setSelectCategories] = useState(0)
  //
  const [tasks, setTask] = useState(
    [
      { id: 0, active: true, favorite: false, text: "Message-1" },
      { id: 1, active: true, favorite: false, text: "Message-2" },
      { id: 2, active: true, favorite: false, text: "Message-3" },
      { id: 3, active: true, favorite: false, text: "Message-4" },
      { id: 4, active: true, favorite: false, text: "Message-5" }
    ]
  )
  //
  // const [selectTask, setSelectTask] = useState(0)
  //
  const handleNewCategories = () => console.log("handleNewCategories")
  //
  const handleRemoveCategories = () => console.log("handleRemoveCategories")
  //
  const handleSelectCategories = () => console.log("handleSelectCategories")
  //
  const handleTextCategories = () => console.log("handleTextCategories")
  //
  const handleNewTask = () => console.log("handleNewTask")
  //
  const handleRemoveTask = () => console.log("handleRemoveTask")
  //
  const handleSelectTask = () => console.log("handleSelectTask")
  //
  const handleActiveTask = () => console.log("handleActiveTask")
  //
  const handleFavoriteTask = () => console.log("handleFavoriteTask")
  //
  const handleTextTask = () => console.log("handleTextTask")
  //
  return (
    <div className="App">
      <Header />
      <main>
        <CategoriesList />
        <TasksList />
      </main>
      <br></br>
      <ToDoList />      
    </div>
  );
}

export default App;
