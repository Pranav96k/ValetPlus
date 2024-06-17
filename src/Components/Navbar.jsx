import React from 'react';

const Navbar = ({page}) => {
  return (
    <nav className="fixed top-0 left-0 w-full flex max-w-[1519px] bg-[#0C79B6] justify-between p-3 shadow-md items-center m-auto">

      {/* Logo */}
      <div className='flex gap-2 items-center flex-1 sm:mx-4 md:mx-6 lg:mx-8 '>
        <span className='font-medium text-2xl text-white lg:text-4xl cursor-pointer'>ValetPlus+</span>
      </div>

      
      <div className='flex gap-4 items-center justify-end sm:mx-4 md:mx-6 lg:mx-8'>
        {/* Home Button */}
        {(page!=='login' && page!=='home') && (<span className='mx-5 font-serif text-white cursor-pointer'>Home</span>)}

        {/* Add Customer Button */}
        {(page==='home')&& (<button className='items-center border border-bl px-2 py-2 bg-white rounded-lg hover:border-grey-600'>
          <span className='font-serif'>Add Customers</span>
        </button>)}

        {/* Admin Profile */}
        {(page!=='login')&&(<svg className='h-9 w-9 cursor-pointer' width="42" height="42" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M37.2657 43.8318H7.73589C6.14651 43.8318 4.97284 42.1376 5.57231 40.5795C8.35372 33.375 14.8881 29.2477 22.4997 29.2477C30.1135 29.2477 36.6479 33.375 39.4293 40.5795C40.0288 42.1376 38.8551 43.8318 37.2657 43.8318ZM13.3125 14.6636C13.3125 9.30156 17.4352 4.94092 22.4997 4.94092C27.5664 4.94092 31.6868 9.30156 31.6868 14.6636C31.6868 20.0257 27.5664 24.3864 22.4997 24.3864C17.4352 24.3864 13.3125 20.0257 13.3125 14.6636ZM44.9003 42.947C43.2305 34.7824 38.0076 28.7567 31.1333 26.0222C34.776 22.9182 36.9005 17.8988 36.1196 12.403C35.2147 6.0273 30.2031 0.925411 24.1534 0.181622C15.8022 -0.846556 8.71891 6.03229 8.71891 14.6636C8.71891 19.2576 10.7309 23.3508 13.8683 26.0222C6.99173 28.7567 1.77112 34.7824 0.099054 42.947C-0.507299 45.9149 1.75275 48.6932 4.62144 48.6932H40.3779C43.2489 48.6932 45.5089 45.9149 44.9003 42.947Z" fill="white" />
        </svg>)}
      </div>
    </nav>
  )
}

export default Navbar
