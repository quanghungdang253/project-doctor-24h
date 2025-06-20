import React, { useState } from 'react';

function LyThuyet() {
    const [valueA, setValueA] = useState();
     const [valueB, setValueB] = useState(false);
//1 . các kiểu dữ liệu cở bản 
      let Numbers: number  = 10;
      const Strings: string = "Đặng Quang Hùng";
      const nullesr : null = null;
      const undefiner: undefined = undefined;
      const unknow: unknown = "50";
      const booelan: boolean = true;
      let any : any = 10;

// kiểu dữ liệu hôn hợp 
      let listArray: number[] = [1,2,3,4,5,6,7];
      let lisrString: string[] = ["Quang Hùng","Quang Trường","Quang Đức","Thúy An","Thị Hương"];
// kiễu object
const Objects : {
    name: string;

    age: number;
    job: string;
} = {
    name: "Quang Hùng",
    job: "Mình là dậng quang hùng",
    age: 19
}
// kiểu Type Alias  chọn kiểu cho  dữ liêu 
// định nghĩa các thuộc tính 
type Objects = {
    name: string;
    age: number;
    
}

const prints: Objects = 
{
        name: "Hung",
        age: 19
}

// kiểu interface 
// interface: là cách dùng để định nghĩa cấu trúc của một đối tượng. Nó giống như một “bản thiết kế” mô tả các thuộc tính và kiểu dữ liệu mà một đối tượng phải có.
interface example {
    name: string;
    age: number;
}

const data: example = {
    name: "Hung",
    age: 18
}
//===========================================================================================================================================================
// ================================Union type=============================================
// định nghĩa : Trong TypeScript, Union Type (Kiểu hợp) cho phép một biến có thể nhận nhiều kiểu dữ liệu khác nhau. Đây là một tính năng rất mạnh mẽ để làm cho kiểu dữ liệu linh hoạt hơn mà vẫn có kiểm soát kiểu.
// cú pháp let varibleName: type1 | type2 | type2
let name: string | number;

name = 19;
console.log(name);






//==================================




// thực hiện khai báo function 
// loại 1 hàm có giá trị trả về 
function handleExample(numberA:number ,numberB: number): number {
    const value = numberA + numberB;
            return value;
}
// loại 2 hàm không có giá trị trả về 
function handle(elementOne: number): void {
        console.log(elementOne);
}
function resultValue():void {
         setValueB(true);
}
// hàm có tham số tùy chọn 
function handleOptions(numberA: number , fullname?:string): void {
    console.log(numberA);
    if(fullname !== null){
            console.log(fullname)
    }

}
// ===================Hàm mũi tên (arrow function)===================
const multiply = (a: number, b: number): number => {
  return a * b;
};
// ======================= 6. Function type (kiểu hàm)=======================
type Calculator = (a: number, b: number) => number;

const subtract: Calculator = (x, y) => x - y;

//===============================7. Hàm trả về object có cấu trúc======================
function createUser(name: string, age: number): { name: string; age: number } {
  return { name, age };
}
// =========================== 3. enum – Định nghĩa tập giá trị liệt kê==================
enum Role {
  Admin,
  User,
  Guest
}

let role: Role = Role.Admin;

//===================================  4. Union Type – Kiểu hợp

type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";
type ID = string | number;

//================================================= 5. Intersection Type – Kiểu giao 

type Person = { name: string };
type Contact = { email: string };

type User = Person & Contact;

const user: User = { name: "Hung", email: "hung@gmail.com" };
//================================================6. Literal Types – Giá trị cố định
type Direction = "left" | "right" | "up" | "down";
let move: Direction = "left";
//========================================== 7. Tuple – Mảng có độ dài và kiểu cố định


let person: [string, number] = ["Hung", 25];

//============================== typeof – Lấy kiểu từ giá trị có sẵn




//==========================================

    return (
        <div>
         <div >   
            
              <h1> {data.name}</h1>
              <h1> {data.age}</h1>
            
              <button onClick={() => resultValue()}> Kết quả </button>
              <button onClick={() => handleOptions(10)}> OK </button>
              { valueB ? (
                <div>
                        <h1> Kết quả của phép tính là : {handleExample(10,20)} </h1>
              </div>
              ) : (
                <p> Chưa có kết quả </p>
              )}
          
        </div>
        </div>
    );
}

export default LyThuyet;