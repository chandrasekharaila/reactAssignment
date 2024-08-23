import React from 'react'

export const Header = () => {
  return (
      <div className='d-flex justify-content-around p-3'>
          <span>Accuknox</span>
          <div>
              <input type="text" name="" placeholder='search a widget'/>
              <button className='btn btn-secondary m-1'>submit</button></div>
        
    </div>
  )
}
export default Header
