import React from 'react';

// thực hiện khai button tái sử dụng được 
interface Btn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    

}
const Button: React.FC<Btn> = ({label , ...Click}) => {
    return (
        <div>
                <button {...Click}> {label}  </button>
        </div>
    );
}

export default Button;