import { Link } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import { Table } from "../Components/Table";

export const ImmoIndex = () =>{
    return <>
      <NavBar/> 
      <div className="flex flex-col gap-20 mt-10">
        <div className="">
          <Link to="/AddMat" className="p-2 text-white transition hover:text-gray-50 bg-teal-700 rounded-md hover:bg-teal-600 hover:rounded-md hover:p-2">Ajouter Materiel</Link>
        </div>
        <div>
          <Table/>
        </div>
      </div>

    </>
}