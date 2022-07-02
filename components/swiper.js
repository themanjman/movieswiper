import React from 'react'
import TinderCard from 'react-tinder-card'

function Swiper() {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }




  return (
    <div>
        <TinderCard className='absolute' onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} >
                <div className='relative w-64 h-64 rounded-[20px] bg-blue-800 justify-center items-center'>
                    Hello World! 
                </div>
        </TinderCard>
        <TinderCard className='absolute' onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} >
                <div className='relative w-64 h-64 rounded-[20px] bg-blue-800 justify-center items-center'>
                    Hello World! 
                </div>
        </TinderCard>
    </div>

    
  )


}

export default Swiper