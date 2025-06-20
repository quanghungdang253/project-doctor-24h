import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube ,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faLocationDot,faBuilding,faMagnifyingGlass,faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function HeaderInfor() {
    return (
        <div className='text-white 
                      '>
         <div className='flex justify-between mx-auto '>  
            <div className='lg:flex lg:gap-2 lg:items-center'>
                        <span> Tìm hiểu thêm: </span>
                    <Link to="">  
                         <FontAwesomeIcon icon={faFacebook} className='text-xl cursor-pointer' />
                    </Link>
                        <Link to="">   
                              <FontAwesomeIcon icon={faYoutube} className='text-xl cursor-pointer' />
                         </Link>
                         <Link to="">  
                               <FontAwesomeIcon icon={faTiktok} className='text-xl cursor-pointer'/>
                          </Link>
                          <Link to="">  
                               <FontAwesomeIcon icon={faInstagram} className='text-xl cursor-pointer' />
                          </Link>
            </div>
            <div className='flex gap-3 items-center'>
                <Link to="">  
                 <div className='text-[14px] font-sans flex gap-1.5 items-center cursor-pointer'>         
                       <FontAwesomeIcon icon={faBuilding} />
                        Doanh nghiệp           
                 </div>
                </Link>
                     <Link to="">  
                           <div  className='text-[14px] font-sans flex gap-1.5 items-center cursor-pointer'>
                              <FontAwesomeIcon icon={faLocationDot} />
                                 Điểm lấy mẫu 
                     
                             </div>
                     </Link>
                 <div  className='text-[14px] font-sans flex gap-1.5 items-center cursor-pointer'>
                       <Link to="">  
                               <FontAwesomeIcon icon={faMagnifyingGlass} />
                                Tra cứu kết quả 
                       </Link>
                 </div>
                    <Link to="">
                 <div className='text-[14px] font-sans flex gap-1.5 items-center cursor-pointer'> 
                      <FontAwesomeIcon icon={faMobileScreenButton} />
                       Ứng dụng dành cho đối tác            
                 </div>
                  </Link>
                    <Link to="">   
                      <div  className='text-[14px] font-sans flex gap-1.5 items-center cursor-pointer'>
                          <FontAwesomeIcon icon={faPhone} />
                         Liên hệ 
                       </div>

                     </Link>
            </div>
          </div>
        </div>
    );
}

export default HeaderInfor;