import React from 'react'
import Button from './Button';
import { useRef } from 'react';

const ButtonList = () => {
    const buttonWrapperRef = useRef(null);

    const handleSlide = (direction) => {
      const scrollAmount = buttonWrapperRef.current.clientWidth;
      buttonWrapperRef.current.scrollLeft += direction * scrollAmount;
    };

  return (
    // <div className='flex  overflow-hidden'>
    // <div id="buttonWrapper" className="flex transition-transform ease-in-out duration-300">
    //     <Button name="All"/>
    //     <Button name="Music"/>
    //     <Button name="Live"/>
    //     <Button name="Gaming"/>
    //     <Button name="Cooking"/>
    //     <Button name="Beauty"/>
    //     <Button name="Computer"/>
    //     <Button name="Diwali"/>
    //     <Button name="Study"/>
    //     <Button name="Romance"/>
    //     <Button name="Shopping"/>
    //     <Button name="Love"/>
    //     <Button name="Fashion"/>
    //     <Button name="Coding"/>
    //     <Button name="Gk"/>
    // </div>
    // </div>
    <div className='flex overflow-hidden items-center'>
      <button
        onClick={() => handleSlide(-1)}
        className='px-5 py-2 m-2 bg-gray-200 rounded-lg'
      >
        &lt;
      </button>
      <div
        ref={buttonWrapperRef}
        className='flex transition-transform ease-in-out duration-300'
      >
        <Button name='All' />
        <Button name='Music' />
        <Button name='Live' />
        <Button name='Gaming' />
        <Button name='Cooking' />
        <Button name='Beauty' />
        <Button name='Computer' />
        <Button name='Diwali' />
        <Button name='Study' />
        <Button name='Romance' />
        <Button name='Shopping' />
        <Button name='Love' />
        <Button name='Fashion' />
        <Button name='Coding' />
        <Button name='Gk' />
      </div>
      <button
        onClick={() => handleSlide(1)}
        className='px-5 py-2 m-2 bg-gray-200 rounded-lg'
      >
        &gt;
      </button>
    </div>
  )
}

export default ButtonList