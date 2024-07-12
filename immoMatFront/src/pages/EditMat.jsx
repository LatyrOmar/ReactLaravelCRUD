import { FormEdit } from "../Components/FormEdit"
import { NavBar } from "../Components/NavBar"

export const EditMat =() =>{
    return <>
       <div>
        <NavBar/>
        <div className="flex justify-center items-center">
          <FormEdit/>
        </div>
        
       </div>
    </>
}