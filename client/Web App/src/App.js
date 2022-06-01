import React, { useState } from 'react'
import './App.css';
import { initThemes, initCategories, initTasks } from './data/data.js'
import Header from './components/header/header';
import CategoriesList from './components/list/categoriesList';
import TasksList from './components/list/tasksList';
import Button from './components/button/button';
import TasksInputText from './components/inputText/tasksInputText';
import ButtonRow from './components/button/buttonRow';

const App = () => {
  //
  const [themes, setThemes] = useState(initThemes)
  //
  const [categories, setCategories] = useState(initCategories)
  //
  const [tasks, setTasks] = useState(initTasks)
  //
  const [selectCategoriesId, setSelectCategoriesId] = useState(-1)
  //
  const [tasksFilterId, setTasksFilterid] = useState(0)
  //
  const handleSelectCategoriesId = (id) => {
    setSelectCategoriesId(id)
  }
  //
  const handleTasksFilterId = (id) => {
    setTasksFilterid(id)
  }
  //
  const getAllActiveTasks = () => tasks
    .filter(x => x.active)
  //
  const getAllFavoriteTasks = () => tasks
    .filter(x => x.favorite)
  //
  const getTasks = (id) => categories
    .filter(x => x.id === id)
    .map(x => x.tasks)
    .flat()
    .map(x => tasks.filter(y => y.id === x))
    .flat()
  //
  const handleNewCategorie = (e) => {
    if(e.key !== "Enter") return

    e.preventDefault();
    const newCategories = [...categories]
    const highestID = categories[categories.length-1].id
    let categorieName = e.target.value

    // If inputfield is empty use current date for name
    if (categorieName === "")
      categorieName = new Date().toLocaleDateString('en-CA')

    const newCategorie = { id: highestID+1, text: categorieName, tasks: [] }
    newCategories.push(newCategorie)
    setCategories(newCategories)
  }
  //
  const handleNewTask = (e) => {
    if(e.key !== "Enter") return

    e.preventDefault();

    if(selectCategoriesId < 0)
      return alert("not allowed in all/favorite")
    
    // TASK
    const newTaskList = [...tasks]

    // tasks exist?
    let highestID = 0;
    if(tasks.length > 0) {
      highestID = tasks[tasks.length-1].id
      highestID += 1
    }
    
    const newTask = {id: highestID, active: true, favorite: false, text: e.target.value}
    newTaskList.push(newTask)
    setTasks(newTaskList)

    // CATEGORIES
    const newCategorieList = [...categories]
    newCategorieList[selectCategoriesId].tasks.push(highestID)
    setCategories(newCategorieList)
  }
  //
  const handleDeleteTask = (taskId) => {
    const newTaskList = [...tasks]
    const index = newTaskList
      .map((x, i) => x.id === taskId ? i+"" : null)
      .filter(x => x !== null)
    const indexInt = parseInt(index[0])

    newTaskList.splice(indexInt, 1)
    setTasks(newTaskList)
  }
  //
  const handleRenameTask = (taskId) => (e) => {
    if(e.key !== "Enter") return

    e.preventDefault();
    const newTaskList = [...tasks]
    const index = newTaskList
      .map((x, i) => x.id === taskId ? i+"" : null)
      .filter(x => x !== null)
    const indexInt = parseInt(index[0])

    newTaskList[indexInt].text = e.target.value

    setTasks(newTaskList)
  }
  //
  const toggleTaskActive = (taskId) => {
    const newTaskList = [...tasks]
      .map(x => x.id === taskId 
        ? { id: x.id, active: !x.active, favorite: x.favorite, text: x.text }
        : x)

        setTasks(newTaskList)
  }
  //
  const toggleTaskFavorite = (taskId) => {
    const newTaskList = [...tasks]
      .map(x => x.id === taskId 
        ? { id: x.id, active: x.active, favorite: !x.favorite, text: x.text }
        : x)

        setTasks(newTaskList)
  }
  //
  return (
    <div className="App">

      {/* <Header /> */}

      <main>

        <div className='Categories Border-None Border-Right'>

          <CategoriesList 
          categories={categories} 
          tasks={tasks} 
          selectCategoriesId={selectCategoriesId} 
          setSelectCategoriesId={setSelectCategoriesId} 
          handleSelectCategoriesId={handleSelectCategoriesId} 
          getAllActiveTasks={getAllActiveTasks} 
          getAllFavoriteTasks={getAllFavoriteTasks} 
          getTasks={getTasks} />

          <TasksInputText 
          placeholder={"Create New List"} 
          onKeyPress={handleNewCategorie} />

        </div>

        <div className='Tasks'>

          <br />
          <br />

          <TasksInputText 
          className=" Border-Bottom" 
          placeholder={"Create New Task"}
          onKeyPress={handleNewTask} />

          <ButtonRow 
          className='Flex-End' 
          selectedId={tasksFilterId}
          buttons={[
              {id: 0, text: "All", onClick: () => handleTasksFilterId(0)},
              {id: 1, text: "Active", onClick: () => handleTasksFilterId(1)},
              {id: 2, text: "Completed", onClick: () => handleTasksFilterId(2)},
            ]} />

          <br />
          <br />

          <TasksList 
          tasks={tasks} 
          selectCategoriesId={selectCategoriesId} 
          tasksFilterId={tasksFilterId}
          getTasks={getTasks} 
          getAllFavoriteTasks={getAllFavoriteTasks}
          toggleTaskActive={toggleTaskActive}
          toggleTaskFavorite={toggleTaskFavorite}
          handleDeleteTask={handleDeleteTask}
          handleRenameTask={handleRenameTask} />
        
        </div>

      </main>

    </div>
  );
}

export default App;
