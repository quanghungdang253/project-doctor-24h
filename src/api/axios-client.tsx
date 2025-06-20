import axios from "axios";


const axiosClient = axios.create({
    baseURL:'/',
    headers: {
        "Content-Type":'application/json',
// + "Content-Type":'application/json' là một header trong http dùng để thông báo cho server biết rằng dữ liệu mà body gửi đi là định dạng json 
        "Authorization": 'Bearer your_token'
// có nghĩa là : gửi kèm token(mã định danh) để xác thực người dùng khi goi api 
// + Authorization: là tên của HTTP header dùng để xác thực 
//+ Bearer: là loại token xác thực theo chuẩn OAuth 2.0 
// + your_token : là token thực tế thường do server cung cấp để đăng nhập  
    },
    timeout: 5000
})
axiosClient.interceptors.request.use(function(request){
    return request;
}, function(error){
        return Promise.reject(error);
})

axiosClient.interceptors.response.use(function(response){
    return response;
},function(error){
    if(error.response){
        if(error.response.status === 404){
            return Promise.reject(error);
        }else if(error.response.status === 401){
            console.log("Lỗi yêu cầu của client k được phép truy cập vào tài nguyên . Do thiếu thông tin xác thực")
        }else if(error.response.status === 400){
            console.log("yêu cầu của client không hợp lệ ")
        }
    }
}
)
export default axiosClient;