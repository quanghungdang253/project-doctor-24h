

// thực hiên sử dụng thư viện @types/react để khai báo component để nhận props
// component con thực hiện khai báo props 

import React from 'react';
// thực hiện định nghĩa dữ liệu 
// cách 1 : dùng interface
interface data {
    name: string;
    age: number;
}
// cách 2 định nghĩa bằng type 
type data2 = {
     name: string;
     age: number;
}
const Vd: React.FC<data2> = ({name,age}) =>  {
    return (
        <div>
            <h1> Tên của sinh viên là {name}</h1>
            <h1> Tuổi của sinh viên là : {age} </h1>
        </div>
    );
}

export default Vd;