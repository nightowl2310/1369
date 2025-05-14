import React from 'react'
import StyledDivFC1 from './StyledDivFC1'
import link from './link.svg'
import messageCircle from './messageCircle.svg'
import thunder from './thunder.svg'

import userPlus from './userPlus.svg'



function UpperDivFC1() {
  return (
    <div>
        <div className="hFC1 flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle animate-pulse text-yellow-400">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            </svg>
            <h2 className="py-4 text-3xl sm:text-4xl font-extrabold text-white tracking-wide">Skyrocket Your Engagement</h2>
        </div>
        <div className="text-yellow-400 text-base font-medium flex items-start justify-center mx-6 leading-relaxed">
            MyApp™ AI is a powerful tool that helps you create engaging content, boost your social media presence, and connect with your audience like never before.
        </div>
        <div className="px-8 py-6 infoFC1 flex flex-wrap justify-between items-center gap-6">
            <StyledDivFC1 label='Auto Replies' label2='Replies to comments instantly' iconUrl={messageCircle} className='text-white'/>
            <StyledDivFC1 label='AI DM Automation' label2='Sends links automatically through AI' iconUrl={thunder} className='text-white'/>
            <StyledDivFC1 label='Link drops' label2='Embeded Trackable Links' iconUrl={link} className='text-white'/>
            <StyledDivFC1 label='Growth in reach' label2='Uses platform algorithm to gain followres' iconUrl={userPlus} className='text-white'/>
        

        </div>
      
    </div>
    
  )
}

export default UpperDivFC1
