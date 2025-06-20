import React from "react"
import ListRoute from './routes/routes';
import { Routes , Route } from "react-router-dom";
import Header from "./common/header/header";
function App() {


  return (
    <React.Fragment>  
      <div>
               <Header/>  
      </div>
       
          <Routes> 
            {ListRoute.map((item,index) => (
                <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
    </React.Fragment>
   
  )
}

export default App
