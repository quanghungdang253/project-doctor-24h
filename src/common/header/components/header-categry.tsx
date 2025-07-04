// import  { useEffect, useState } from 'react';
// import Menu from '../data/data-menu';
// import IconUser from '../../../ui/icon-user';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { ClipLoader } from "react-spinners";
// import HeaderMenu from './header-menu';
// import type  { mainMenu } from '../data/data-menu';


// const HeaderCategory: React.FC = () => {
    
//     const [product, setProduct] = useState<mainMenu | null>(null);
//     const [index , setIndex] = useState<number>(0);
//     const [openForm, setOpenForm] = useState(false);
// useEffect(() => {
// function handleIndex():void {
//         const handleFind = Menu.find((item) => item.id === index);
//         if(handleFind){
//             console.log(handleFind);
//                 setProduct(handleFind);
//         }
// }
//         handleIndex()
// },[index])

// const handleClick = (
//     _event: React.MouseEvent<HTMLDivElement> 
//   , index: number , openform: boolean) => {
//         setIndex(index);
//         setOpenForm(openform);
        
// }
//     return (
//         <div>
//             <div className='pb-2 pt-2'>
//                  <div className='flex justify-between'>
//                     <h1 className='font-bold text-[1.5em] font-roboto'> Doctor24h </h1>
//                     <div className='flex '>
//                         {Menu.map((item) => (
//                             <div 
//                                 className={`pr-5 pl-5 font-bold  cursor-pointer text-[14px]   flex gap-1 items-center 
//                                 ${(item.id === index && openForm) ? 'bg-green-700 rounded-2xl text-white' : ""}
//                                 `}
//                                 key={item.id}
//                                 onClick={ (e) => handleClick(e, item.id,true)}>                         
//                               {item.name}
//                             <FontAwesomeIcon icon={faCaretDown} />
//                             </div>
//                         ))}
//                            <div className='pr-5 pl-5 cursor-pointer flex    items-center    font-bold rounded-xl'>
//                             <IconUser />
//                              <span>   Đăng nhập    </span>

//                           </div>
//                     </div>
                         
//                  </div>
//                </div>
//                           <hr  className='opacity-20'/>
//             <div>
//                 {
//                     !product  ? (
//                             <ClipLoader color="blue" loading={true} size={150} />
//                     ) : (
//                      <div>  
                          
//                             {openForm ? (
//                                 <div className=' '>  
//                                         <HeaderMenu dataMenu={product} closeForm={() => setOpenForm(false)}/>
//                                 </div>
                                
//                             ) : (
//                                     null  
//                             )
//                             }
//                         </div>
//                     )
//                 }
//                     </div>

//             </div>
      

// )}
        



// export default HeaderCategory;


import { useEffect, useState } from 'react';
import Menu from '../data/data-menu';
import IconUser from '../../../ui/icon-user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from "react-spinners";
import HeaderMenu from './header-menu';
import type { mainMenu } from '../data/data-menu';

const HeaderCategory: React.FC = () => {
  const [product, setProduct] = useState<mainMenu | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const selectedItem = Menu.find((item) => item.id === selectedIndex);
    if (selectedItem) {
      setProduct(selectedItem);
    }
  }, [selectedIndex]);

  const handleClick = (_e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setSelectedIndex(index);
    setIsMenuOpen(true);
  };

  return (
    <div>
      {/* Header Top */}
      <div className="pb-2 pt-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-[1.5em] font-roboto">Doctor24h</h1>
          <div className="flex items-center">
            {/* Menu Items */}
            {Menu.map((item) => (
              <div
                key={item.id}
                className={`pr-5 pl-5 font-bold cursor-pointer text-[14px] flex gap-1 items-center
                  ${item.id === selectedIndex && isMenuOpen ? 'bg-green-700 rounded-2xl text-white' : ''}`}
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.name}
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            ))}

            {/* Login Button */}
            <div className="pr-5 pl-5 cursor-pointer flex items-center font-bold rounded-xl">
              <IconUser />
              <span>Đăng nhập</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="opacity-20" />

      {/* Menu Content */}
      <div>
        {!product ? (
          <ClipLoader color="blue" loading={true} size={150} />
        ) : (
          isMenuOpen && (
            <div>
              <HeaderMenu dataMenu={product} closeForm={() => setIsMenuOpen(false)} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HeaderCategory;
