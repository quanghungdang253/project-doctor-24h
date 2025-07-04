
import Vd from './vd';
import Button from './button';
// áp dung kiểu dữ liệu tự định nghĩa là type và interface
// A thực hành với React.FC<Props> 
 //+ 1. Cú pháp cơ bản của React.FC<Props>
 //+ 2. Component có children (React.FC có sẵn children)
 //+ 3. Component với props mặc định
 //+ 4. Component truyền callback function
 //+ 5. Kết hợp với HTML attributes (button, input...)
 //+ 6. Component nhận mảng dữ liệu
 //  7. Component dùng useState bên trong

 // thực hiện truyền hàm callback 




const VdParents: React.FC = () => {


    // thực hiện đĩnh nghĩa hàm để bắt sự click 
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("FEWfewefew")
  }
    return (
        <a onClick={handleClick} >
            <div>
                 Bấm vào đây 
            </div>

        </a>



    );
}

export default VdParents;

