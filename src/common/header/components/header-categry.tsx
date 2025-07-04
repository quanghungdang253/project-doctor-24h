import  { useEffect, useState } from 'react';
import Menu from '../data/data-menu';
import IconUser from '../../../ui/icon-user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from "react-spinners";
import HeaderMenu from './header-menu';
import { mainMenu } from '../data/data-menu';


const HeaderCategory: React.FC = () => {
    
    const [product, setProduct] = useState<mainMenu | null>(null);
    const [index , setIndex] = useState<number>(0);
    const [openForm, setOpenForm] = useState(false);
useEffect(() => {
function handleIndex():void {
        const handleFind = Menu.find((item) => item.id === index);
        if(handleFind){
            console.log(handleFind);
                setProduct(handleFind);
        }
}
        handleIndex()
},[index])

const handleClick = (
    e: React.MouseEvent<HTMLDivElement> 
  , index: number , openform: boolean) => {
        setIndex(index);
        setOpenForm(openform);
        
}
    return (
        <div>
            <div className='pb-2 pt-2'>
                 <div className='flex justify-between'>
                    <h1 className='font-bold text-[1.5em] font-roboto'> Doctor24h </h1>
                    <div className='flex '>
                        {Menu.map((item) => (
                            <div 
                                className={`pr-5 pl-5 font-bold  cursor-pointer text-[14px]   flex gap-1 items-center 
                                ${(item.id === index && openForm) ? 'bg-green-700 rounded-2xl text-white' : ""}
                                `}
                                key={item.id}
                                onClick={ (e) => handleClick(e, item.id,true)}>                         
                              {item.name}
                            <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                        ))}
                           <div className='pr-5 pl-5 cursor-pointer flex    items-center    font-bold rounded-xl'>
                            <IconUser />
                             <span>   Đăng nhập    </span>

                          </div>
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