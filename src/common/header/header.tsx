import React from 'react';
import HeaderInfor from './components/header-infor';
import HeaderCategory from './components/header-categry';
function Header() {
    return (
      <div> 
        <div className='bg-[#0766F7]'>
          <div className='max-w-[1320px] mx-auto p-2'>
                 <HeaderInfor />          
          </div>       
        </div>
        <div  className='max-w-[1320px] mx-auto p-2'>
                <HeaderCategory />
        </div>
      </div>
    );
}

export default Header;