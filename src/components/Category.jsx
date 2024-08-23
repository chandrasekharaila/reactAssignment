import React from 'react'
import Widget from './Widget';

export const Category = ({categoryData}) => {
    return (<>
        <h2>{categoryData.category}</h2>
      <div className='d-flex align-items-center justify-content-around m-4'>
            <Widget />
            <Widget />
            <Widget/>
      </div>
      </>
  )
}
export default Category;