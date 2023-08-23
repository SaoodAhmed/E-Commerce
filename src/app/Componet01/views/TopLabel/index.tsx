"use client"
import SubComp from './SubComponent'
import ContextWrapper from '@/global/context'

const TopLabel = () => {
  return (
    <ContextWrapper>
      <div className=' overflow-x-hidden border-b text-gray-100 bg-slate-800 '>
          <div className='px-4 max-w-7xl mx-auto flex justify-between items-center'>
              <div>
                <p className='mt-3'><img src="https://readme-typing-svg.demolab.com?font=Maven_Pro&pause=1000&width=435&lines=Sign+up+to+get+big+deals;Nice+to+meet+you;Here+to+provide+you+with+best+services;Sign+up+to+understand+our+polices;Find+different+variety+of++clothes" alt="Typing SVG" /></p>
                </div>
              <SubComp/>
            
          </div>
      </div>
    </ContextWrapper>
  )
}

export default TopLabel