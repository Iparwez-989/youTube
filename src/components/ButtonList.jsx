import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const lst = ["All","Music","T-series","Romance","Games","News","Education","Relaxing","Jokes"]
  return (
    <div className='flex justify-evenly'>
      {lst.map((items,index) =><Button key={index} name={items} /> )}
      
    </div>
  )
}

export default ButtonList
