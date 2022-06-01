import React, { useState } from 'react'
import TaskListItem from '../listItem/taskListItem';
import './tasksList.css';

const TasksList = ({tasks, selectCategoriesId, getTasks, getAllFavoriteTasks, tasksFilterId, toggleTaskActive, toggleTaskFavorite, handleDeleteTask, handleRenameTask }) => {
    // TODO: umbennen in filterByCategoriesList
    const getSelectTasks = (tasks, selectCategoriesId) => {
        switch(selectCategoriesId) {
            case -1: return tasks;
            case -2: return getAllFavoriteTasks();
            default: return getTasks(selectCategoriesId)
        }    
    } 
    // 
    const isfilterTasks = (task, id) => {
        switch(id) {
            case 0: return true;
            case 1: return task.active;
            case 2: return !task.active;
        }
    } 
    //
    const renderTasks = () => tasks === undefined
        ? null
        : getSelectTasks(tasks, selectCategoriesId)
            .filter(x => isfilterTasks(x, tasksFilterId))
            .map(x => 
                <TaskListItem 
                id={x.id} 
                key={x.id} 
                text={x.text}
                onClickActive={toggleTaskActive}
                onClickFavorite={toggleTaskFavorite}
                onClickDelete={handleDeleteTask}
                onKeyPress={handleRenameTask}
                isActive={x.active}
                isFavorite={x.favorite} />)
    //    
    return ( 
        <ul className='TasksList Scroll-Y'>

            {
                renderTasks()
            }

        </ul>
    );
}
 
export default TasksList;