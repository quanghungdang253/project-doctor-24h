
import imgMangThai from '../assets/img/mangthai.jpg';
import imgUngthu from '../assets/img/ungthu.jpg';
import imgTieuduong from '../assets/img/maydo.jpg';
import imgHohap  from '../assets/img/hohap.jpg';
import imgdaycon from '../assets/img/anhdaycon.png';
import img1 from '../assets/img/img-1.jpg';
import img2 from '../assets/img/img-2.jpg';
import img3 from '../assets/img/img-3.jpg';
import img4 from '../assets/img/img-4.jpg';
import imgShorts from '../assets/img/shorts.png';
import  imgVideo from '../assets/img/video.png';
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
},
{
    id:5, content: "Xem tất cả các chuyên mục >> ",img: "", link: "",
}
]


//=================================================================================

// =========================================dataMenu right=========================

interface dataMenuRight {
    id: number;
    img: string;
    link: string;
    content: string;

}

const dataMenuRight: dataMenuRight[] = [
    {
        id: 0, img: img1 , content: "", link: ""
    },
     {
        id: 1, img: img2 , content: "", link: ""
     },
    {
        id: 2, img: img3 , content: "", link: ""
    },
    {
        id: 3, img: img4 , content: "", link: ""
    },
]

// interface video {
//     id: number,
//     name: string,
//     icon: string,
//     link: string,
    
// }
//===========================================data Column 2 =======================


const mainVideo : dataMenuLeft[] = [
  {
    id:0, content: "Videos",img: imgVideo, link: "",
},
{
    id:1, content: "Nuôi dạy con",img: imgShorts, link: "",
},

]
interface mainMenu {
    id: number;
    name: string;
    icon: string;
    title: string;
    title2:string;
    dataleft: dataMenuLeft[];
    dataRight: dataMenuRight[];
    viewNow: string;
   
}

const Menu : mainMenu[] = [
    {
        id: 0, name: "Chuyên mục", icon: "faRightLong", dataleft: MenuLeft ,
        dataRight: dataMenuRight , title:"Chuyển mục sức khỏe ",
        title2: "Tâm điểm các chủ đề tâm điểm",
        viewNow: "Xem ngay"
        
    },
     {
        id: 1, name: "Video", 
        icon: "", dataleft: mainVideo,  dataRight: dataMenuRight,
        title: "Chuyên mục video", 
        title2: "Tâm điểm các chủ đề tâm điểm",
        viewNow: ""
        
    },
     {
        id: 2, name: "Kiểm tra sức khỏe", icon: "", dataleft: MenuLeft,  dataRight:  dataMenuRight, title: "Công cụ sức khỏe", 
        title2: "Tâm điểm các chủ đề tâm điểm",
        viewNow: ""
        
    },
     {
        id: 3, name: "Cộng đồng", icon: "", 
               dataleft: MenuLeft, 
               dataRight: dataMenuRight,
               title: "Tìm cộng đồng của bạn",
               title2: "Tâm điểm các chủ đề tâm điểm",
               viewNow: ""
    },
     {
        id: 4,name: "Xem thêm", icon: "", 
        dataleft: MenuLeft, 
        dataRight: dataMenuRight , title: "",
        title2: "Tâm điểm các chủ đề tâm điểm",
        viewNow: ""
        
    }
]

export default Menu;
export type {mainMenu};

