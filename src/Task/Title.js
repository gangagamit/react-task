import React from 'react'
function Title() {
  return (
    <div className='p-2'>
      <nav className='nav-bar'>
        <ul className='flex justify-around items-start h-16 text-center bg-blue-400 text-white font-sans text-2xl p-3 border-1 rounded-lg'>
          <li><a>Home</a></li>
          <li><a>Contact us</a></li>
          <li><a>About</a></li>
          <li><a>Help</a></li>
        </ul>
      </nav>
    </div>
  )
}
export default Title;
