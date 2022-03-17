import React from 'react'
import ImageOne from '../images/egg.jpg'
import ImageTwo from '../images/egg-2.jpg'
function Content() {
  return (
   <> 
   <div className='menu_card'>
        <img src={ImageOne} alt="Egg" className="h-full rounded mb-20 shadow" />

    <div className="flex_center flex-col ">
        <h2 className="text-2xl mb-2">Egg Muffins</h2>
        <p className="mb-2">
            Crispy, delecious,and nutritious
        </p>
        <span>$16</span>
    </div>    
    </div>
   <div className='menu_card'>
        <img src={ImageTwo} alt="Egg" className="h-full rounded mb-20 shadow" />

    <div className="flex_center flex-col">
        <h2 className="text-2xl mb-2">Egg salada</h2>
        <p className="mb-2">
            Crispy, delecious,and nutritious
        </p>
        <span>$22</span>
    </div>    
    </div>
   </>
  )
}

export default Content