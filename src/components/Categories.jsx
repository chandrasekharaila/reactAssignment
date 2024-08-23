import React, { useEffect, useState } from 'react'
import data from "../data.json"
import Category from './Category'
export const Categories = () => {
    const [categoryData, setCategoryData] = useState(data)
    const handleAddWidget = (categ,widgetname) => {
        setCategoryData((prevData) => {
            return prevData.map((category) => {
                
            })
        })
    }
    
  return (
      <div className='d-flex flex-column justify-content-around p-4'>
          {categoryData.map((category) => {
              return <Category categoryData={category}/>
          })}
    </div>
  )
}

export default Categories;
