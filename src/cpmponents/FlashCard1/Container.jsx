import React from 'react'
import UpperDivFC1 from './UpperDivFC1'
import IconButton from '../IconButton'
import LowerDivFC1 from './LowerDivFC1'
import './Container.css'
function Container() {
  return (
    <div className="mx-6 my-4 flex flex-col items-center gap-4 py-8 bg-[#434343] rounded-lg transition-transform duration-300 hover:scale-[1.02]">
      <UpperDivFC1 />
      <IconButton 
        label='Automate' 
        className='automateButton bg-gradient-to-b from-[#ff877b] to-[#b32d5c] font-extrabold tracking-wide hover:scale-[1.02] transition-transform duration-200'
      />
      <div>
        <LowerDivFC1 />
      </div>
    </div>
  )
}

export default Container
