import React, { useEffect, useState } from 'react';
import Menu from '../data/data-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from "react-spinners";
import HeaderMenu from './header-menu';


function HeaderCategory() {
    
    const [product, setProduct] = useState(null);
    const [index , setIndex] = useState(0);
    const [openForm, setOpenForm] = useState(false);
useEffect(() => {
function handleIndex():void {
        const handleFind = Menu.find((item) => item.id === index);
        if(handleFind){
                setProduct(handleFind);
        }
}
        handleIndex()
},[index])

    return (
        <div>
            <div className='pb-2 pt-2'>
                 <div className='flex justify-between'>
                    <h1 className='font-bold text-[2em]'> Doctor24h </h1>
                    <div className='flex '>
                        {Menu.map((item) => (
                            <div 
                                className={`pr-5 pl-5 cursor-pointer font-semibold flex gap-1 items-center 
                                ${(item.id === index && openForm) ? 'bg-green-700 rounded-2xl text-white' : ""}
                                `}
                                key={item.id}
                                onClick={() => {
                                         setIndex(item.id)
                                         setOpenForm(true)
                                }}
                            > 
                              {item.name}
                            <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                        ))}
                           <div className='pr-5 pl-5 cursor-pointer flex items-center font-bold bg-amber-300 rounded-2xl'> Đăng nhập </div>
                    </div>
                         
                 </div>
               </div>
               <hr  className='opacity-20'/>
            <div>
                {
                    !product  ? (
                            <ClipLoader color="blue" loading={true} size={150} />
                    ) : (
                     <div>  
                          
                            {openForm ? (
                                <div className=' '>  
                               
                                        <HeaderMenu dataMenu={product} closeForm={() => setOpenForm(false)}/>
                                </div>
                            ) : (
                                    null  
                            )
                            }
                    </div>
                    )
                }
                    </div>

            </div>
      

)}
        



export default HeaderCategory;