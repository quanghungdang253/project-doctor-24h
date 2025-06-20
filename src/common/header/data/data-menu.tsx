
import imgMangThai from '../assets/img/mangthai.jpg';
import imgUngthu from '../assets/img/ungthu.jpg';
import imgTieuduong from '../assets/img/maydo.jpg';
import imgHohap  from '../assets/img/hohap.jpg';
import imgdaycon from '../assets/img/anhdaycon.png';

//=======================================================================
interface dataMenuLeft {
    id: number;
    content: string;
    img: string;
    link:string;
}

const MenuLeft : dataMenuLeft[] = [
{
    id:0, content: "Mang thai",img: imgMangThai, link: "",
},
{
    id:1, content: "Nuôi dạy con",img: imgdaycon, link: "",
},
{
    id:2, content: "Tiểu đường",img: imgTieuduong, link: "",
},
{
    id:3, content: "Hô hấp",img: imgHohap , link: "",
},
    {
         id:4, content: "Ung thư",img: imgUngthu, link: "",
    }
]

//=================================================================================


interface video {
    id: number,
    name: string,
    icon: string,
    link: string,
    
}

const mainVideo : video[] = [
    {
        id: 0, name: "Videos", icon: "", link: ""

    },
    {
        id: 1, name: "Shorts", icon: "", link: ""
    }
]



interface mainMenu {
    id: number;
    name: string;
    icon: string;
    title: string;
    dataleft: dataMenuLeft[];
}

const Menu : mainMenu[] = [
    {
        id: 0, name: "Chuyên mục", icon: "", dataleft: MenuLeft , title:"Chuyển mục sức khỏe "

    },
     {
        id: 1, name: "Video", icon: "", dataleft: MenuLeft, title: "Chuyên mục video", 
        
    },
     {
        id: 2, name: "Kiểm tra sức khỏe", icon: "", dataleft: MenuLeft, title: "Công cụ sức khỏe", 
        
    },
     {
        id: 3, name: "Cộng đồng", icon: "", dataleft: MenuLeft,
         title: "Tìm cộng đồng của bạn"
        
    },
     {
        id: 4, name: "Xem thêm", icon: "", dataleft: MenuLeft , title: ""
        
    }
]

export default Menu;

