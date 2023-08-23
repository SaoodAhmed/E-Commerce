import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Subscription = () => {
  return (
    <div className='min-h-[50vh] md:h-[70vh] lg:min-h-[50rem] text-gray-800 flex flex-col justify-center items-center text-center gap-y-6 relative'>
        <h1 className="font-bold text-[4rem] absolute md:text-[9rem] text-slate-100 mx-auto -z-50">
          Newsletter
        </h1>
        <h2 className='text-4xl md:text-5xl font-bold'>Subscribe Our Newsletter</h2>
        <p className='text-lg max-w-[32rem] text-slate-500'>Get the latest information and promo offers directly</p>
        <div className='flex justify-center gap-x-4 flex-wrap gap-y-4'>
            <input className='px-2 md:px-4 py-1 outline-none flex flex-grow border border-slate-600 w-72 md:w-80' placeholder='Input email address'/>
            <Link href={"/products"}>
              <Button className='text-lg font-medium text-slate-50 rounded-none border-2 border-slate-400'>Get Started</Button>
            </Link>
        </div>
    </div>
  )
}

export default Subscription