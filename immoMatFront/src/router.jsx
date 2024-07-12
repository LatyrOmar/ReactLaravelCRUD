import { createBrowserRouter } from "react-router-dom";
import {ImmoIndex} from "./pages/ImmoIndex";
import {AddMat} from "./pages/AddMat";
import {EditMat} from "./pages/EditMat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ImmoIndex/>,
        // children:[
        //     {
        //         path: "/EditMat/:id",
        //         element: <EditMat/>

        //     }
        // ]
    },
    {
        path: "/AddMat",
        element: <AddMat/>
    },
    {
        path: "/EditMat/:id",
        element: <EditMat/>
    }

]);
export default router;
