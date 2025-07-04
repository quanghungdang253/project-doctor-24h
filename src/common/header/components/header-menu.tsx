
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark} from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

//   interface dataLeft {
//         id: number,
//         content: string,
//         img: string,
//   }
//   interface dataMenu {
//         id: number;
//         name: string;
//         icon: string;
//         title: string;
//         dataleft: dataLeft[]
//     }
//     interface headerMenu {
//         dataMenu : dataMenu;
//         closeForm: () => void;
//     }
    
//     // cách 1 : props: headerMenu
// function HeaderMenu({dataMenu, closeForm}: headerMenu ) {

//     return (
//         <div className='bg-white pb-6 pt-4'>
//              <div className='pl-10 relative'>
//                 <big onClick={closeForm} className='absolute top-0 right-0 cursor-pointer pr-6'> 
//                         <FontAwesomeIcon icon={faXmark} />
//                 </big>
            
//                 <div className=' flex'>
//                   <div className='w-[15em]'>   
//                     <h1 className=' text-[18px] font-bold pb-4 pt-2'> {dataMenu.title} </h1>
//                        <div className='grid gap-10'>
//                           {dataMenu.dataleft.map((item) => (
//                             <Link to={item.link} 
//                                 className={`
//                                     flex 
//                                     items-center
//                                     gap-4  
                                 
//                                   text-black
//                                     cursor-pointer
//                                     text-opacity-50 
//                                     ${item.id === dataMenu.dataleft.length - 1 ? 'border-blue-600  font-bold justify-start text-[12px] outline-1 outline-blue-600 p-2 rounded-t-sm' : ' text-[16px]'}
//                                 `}>
//                                 <img src={item.img} alt="" className='max-w-10 rounded-2xl '/>
//                                 {item.content}
//                             </Link>
//                          ))}
//                         </div>
//                       </div>
//                         <div className=' w-[1px] opacity-25 bg-black ml-10'></div>
//                         <div className='mt-4 ml-8'>
//                                  <h1
//                                  className='text-[12px] h-[3em]'
//                                  >{dataMenu.title2}
//                                      <Link to={}
//                                         className='text-red-600 inline-block p-2 font-bold  rounded-3xl'> 
//                                         {dataMenu.viewNow} <FontAwesomeIcon icon={dataMenu.icon}
//                                       />  
//                                     </Link>
//                                 </h1>
//                          <div className='flex gap-6 mt-2.5'>  
//                          {dataMenu.dataRight.map((item) => (
//                                 <div key={item.id}> 
//                                     <Link>
//                                         <img src={item.img} alt="" className='max-w-[13em] ' />
//                                     </Link>
//                                 </div>
                      
//                          ))}
//                          </div>

//                     </div>
                
//                 </div>
//              </div>
       
//         </div>
//     );
// }

// export default HeaderMenu;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


interface dataLeft {
  id: number;
  content: string;
  img: string;
  link: string;
}

interface dataRight {
  id: number;
  img: string;
}

interface dataMenu {
  id: number;
  name: string;
  icon: "";
  title: string;
  title2: string;
  viewNow: string;
  dataleft: dataLeft[];
  dataRight: dataRight[];
}

interface HeaderMenuProps {
  dataMenu: dataMenu;
  closeForm: () => void;
}

function HeaderMenu({ dataMenu, closeForm }: HeaderMenuProps) {
  return (
    <div className='bg-white pb-6 pt-4'>
      <div className='pl-10 relative'>
        <big onClick={closeForm} className='absolute top-0 right-0 cursor-pointer pr-6'>
          <FontAwesomeIcon icon={faXmark} />
        </big>

        <div className='flex'>
          <div className='w-[15em]'>
            <h1 className='text-[18px] font-bold pb-4 pt-2'>{dataMenu.title}</h1>
            <div className='grid gap-10'>
              {dataMenu.dataleft.map((item) => (
                <Link to={item.link} key={item.id} className={`flex items-center gap-4 text-black text-opacity-50 cursor-pointer ${item.id === dataMenu.dataleft.length - 1 ? 'border-blue-600 font-bold justify-start text-[12px] outline-1 outline-blue-600 p-2 rounded-t-sm' : 'text-[16px]'}`}>
                  <img src={item.img} alt="" className='max-w-10 rounded-2xl' />
                  {item.content}
                </Link>
              ))}
            </div>
          </div>

          <div className='w-[1px] opacity-25 bg-black ml-10'></div>

          <div className='mt-4 ml-8'>
            <h1 className='text-[12px] h-[3em]'>
              {dataMenu.title2}
              <Link to="/" className='text-red-600 inline-block p-2 font-bold rounded-3xl'>
                {dataMenu.viewNow}
                {/* <FontAwesomeIcon icon={dataMenu.icon} /> */}
              </Link>
            </h1>

            <div className='flex gap-6 mt-2.5'>
              {dataMenu.dataRight.map((item) => (
                <div key={item.id}>
                  <Link to="/">
                    <img src={item.img} alt="" className='max-w-[13em]' />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
