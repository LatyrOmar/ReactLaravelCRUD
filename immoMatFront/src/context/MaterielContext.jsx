import { createContext, useState,useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api/";

const MaterielContext = createContext();

export const MaterielProvider = ({ children }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [materiels, setMaterial] = useState([]);
    const [materiel, setMateriel] = useState([]);
    const [error, setError] = useState({});
    
    const changeHandler = (event) => {
        setImage(event.target.files[0]);
    };

    const getMateriel = async () => {
        try {
            const response = await axios.get('materiel');
            setMaterial(response.data);
        } catch (error) {
            console.error('Error fetching material:', error);
        }
    };

    const getMaterial = async (id) => {
        try {
            const response = await axios.get(`materiel/${id}`);
            const materielData = response.data;
            setMateriel(materielData);
            // setDescription(materielData.data.description);
            // setTitle(materielData.data.title);
           
        } catch (error) {
            console.error('Error fetching material:', error);
        }
    };
    useEffect(() => {
        if (materiel) {
            setTitle(materiel.title || "");
            setDescription(materiel.description || "");
        }
    }, [materiel]);
    const storeMateriel = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            await axios.post('materiel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setTitle("");
            setDescription("");
            setImage(null);
            getMateriel();
            window.location.href = '/';
        } catch (e) {
            if (e.response.status === 422) {
                setError(e.response.data.error);
                console.log(e.response.data.error);
            }
        }
    };

    const updateMateriel = async (e, id) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        try {
            await axios.post(`materiel/${id}?_method=PUT`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setTitle("");
            setDescription("");
            setImage(null);
            getMaterial();
            window.location.href = '/';
        } catch (e) {
            if (e.response.status === 422) {
                setError(e.response.data.errors);
            }
        }
    };
    const deleteMateriel = async (id) => {
        try {
            await axios.delete(`materiel/${id}`);
            getMateriel(); 
        } catch (error){
            console.error('Error deleting material:', error);
        }
    };

    return (
        <MaterielContext.Provider
            value={{
                materiel,
                materiels,
                getMaterial,
                getMateriel,
                title,
                description,
                image,
                setTitle,
                setDescription,
                setImage,
                storeMateriel,
                changeHandler,
                error,
                updateMateriel,
                deleteMateriel
            }}
        >
            {children}
        </MaterielContext.Provider>
    );
};

export default MaterielContext;
