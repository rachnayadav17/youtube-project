import React from 'react'
import Button from './Button';


const ButtonList = (direction) => {
   

  return (
    <div className='flex  overflow-hidden'>
    <div id="buttonWrapper" className="flex transition-transform ease-in-out duration-300">
        <Button name="All"/>
        <Button name="Music"/>
        <Button name="Live"/>
        <Button name="Gaming"/>
        <Button name="Cooking"/>
        <Button name="Beauty"/>
        <Button name="Computer"/>
        <Button name="Diwali"/>
        <Button name="Study"/>
        <Button name="Romance"/>
        <Button name="Shopping"/>
        <Button name="Love"/>
        <Button name="Sports"/>
       
    </div>
    </div>

  )
}

export default ButtonList