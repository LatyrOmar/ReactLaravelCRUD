import axios from "axios";
import { useEffect, useContext } from "react"
import MaterielContext from "../context/MaterielContext";
import { Link } from "react-router-dom";
export const Table = () =>{
    const {materiels,getMateriel,deleteMateriel} = useContext(MaterielContext);
    useEffect(()=>{
        getMateriel();

    },[]);
    
    return <>
    <div>
 
    <div className="overflow-x-auto">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
        <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">title</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">desciption</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">image</th>
            <th className="px-4 py-2"></th>
        </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
        {materiels.map((materiel,key) => {
            return (
                <tr key={key}>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{materiel.title}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-96 text-wrap  ">{materiel.description}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">
                        <img src={`http://localhost:8000/storage/product/image/${materiel.image}`} alt="" width="70px" className="border-2 rounded-md cursor-pointer border-teal-600  "/>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">

                        <Link to={`/EditMat/${materiel.id}`} className="inline-block rounded bg-teal-600 px-4 py-2 text-xs font-medium text-white hover:bg-teal-500">Edit </Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                        <button
                            
                            onClick={() => deleteMateriel(materiel.id)}
                            className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-400"
                        >
                            Delete 
                        </button>
                    </td>
                </tr>
            );
        })}
        </tbody>
    </table>
    </div>
    </div>
    </>

}