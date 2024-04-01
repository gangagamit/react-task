import React from 'react'

function Footer() {
  return (
    <div className='flex justify-around bg-blue-500 p-2 rounded mt-3'>
      <div className='part-1'>
        <ul className='flex gap-5 items-center p-4 font-semibold text-white underline'>
            <li>Work</li>
            <li>Service</li>
            <li>Career & Culture</li>
            <li>Optimization</li>
            <li>Podcast</li>
        </ul>
        <p className='text-3xl font-sans font-semibold text-white'>Contact for more Information</p>
      </div>
      <div className='part-2 font-sans font-semibold text-white'>
        <p>New york</p>
        <p>609 Greenvich Sreet</p>
        <p>New York, 10014</p>
        <p>(609)-962-20254</p>
        <p>newbusiness@design.com</p>
      </div>
    </div>
  )
}

export default Footer
