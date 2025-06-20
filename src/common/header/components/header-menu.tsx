import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
  interface dataLeft {
        id: number,
        content: string,
        img: string,
  }

  interface dataMenu {
        id: number;
        name: string;
        icon: string;
        title: string;
        dataleft: dataLeft[]
    }
    interface headerMenu {
        dataMenu : dataMenu;
        closeForm: () => void;
    }
    
    // cách 1 : props: headerMenu
function HeaderMenu({dataMenu, closeForm}: headerMenu ) {

    return (
        <div className='bg-white pb-6 pt-4'>
             <div className='pl-40 relative'>
                <big onClick={closeForm} className='absolute top-0 right-0 cursor-pointer pr-6'> 
                        <FontAwesomeIcon icon={faXmark} />
                </big>
            
                <div className=' flex'>
                    <div className='w-[15em]'>   
                    <h1 className=' text-[18px] font-bold pb-4 pt-2'> {dataMenu.title} </h1>
                    <div className='grid gap-10'>
                        {dataMenu.dataleft.map((item) => (
                            <div className='flex items-center gap-4  text-[16px] text-black cursor-pointer font-bold text-opacity-50 '>
                                <img src={item.img} alt="" className='max-w-10 rounded-2xl '/>
                                {item.content}
                            </div>
                        ))}
                    </div>
                    </div>
                  <div className=' w-[1px] opacity-25 bg-black'></div>
                </div>
             </div>
       
        </div>
    );
}

export default HeaderMenu;