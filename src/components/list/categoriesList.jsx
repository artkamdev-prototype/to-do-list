import React, { useState } from 'react'
import './categoriesList.css';
import CategoriesListItem from '../listItem/categoriesListItem';
//
const CategoriesList = ({categories, tasks, selectCategoriesId, handleSelectCategoriesId, getAllActiveTasks, getAllFavoriteTasks, getTasks}) => {
    
    const renderCategories = () => categories === undefined
        ? null
        : categories.map((x, i) => 
            <CategoriesListItem 
            id={i} 
            key={i} 
            text={x.text} 
            text2={getTasks(x.id).filter(x => x.active).length} 
            onClick={()=>handleSelectCategoriesId(x.id)} 
            selectedId={selectCategoriesId} />)
    //
    return (
        <ul className='CategoriesList Scroll-Y Border-Bottom'>

            <CategoriesListItem 
            id={-1} 
            key={-1} 
            text={"All"} 
            text2={getAllActiveTasks().length} 
            onClick={()=>handleSelectCategoriesId(-1)} 
            selectedId={selectCategoriesId} />

            <CategoriesListItem 
            id={-2} 
            key={-2} 
            text={"Favorites"} 
            text2={getAllFavoriteTasks().filter(x => x.active).length} 
            onClick={()=>handleSelectCategoriesId(-2)} 
            selectedId={selectCategoriesId} />

            {renderCategories()}

        </ul>
    );
}
 
export default CategoriesList;