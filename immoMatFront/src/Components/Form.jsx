import { useContext } from "react";
import MaterielContext from "../context/MaterielContext";

export const Form = () => {
    const {
        title,
        description,
        setTitle,
        setDescription,
        storeMateriel,
        changeHandler,
        error
    } = useContext(MaterielContext);

    return (
        <>
            <div className="bg-gray-100 p-20 rounded-md w-[40em] flex justify-center items-center">
                <form onSubmit={storeMateriel} className="max-w-sm mx-auto" encType="multipart/form-data">
                    <div>
                        <label htmlFor="small-input" className="mb-2 text-sm font-medium text-gray-900 dark:text-white float-start">Title</label>
                        <input
                            name="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            type="text"
                            id="small-input"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-500"
                        />
                        {error.title && <span className="text-sm text-red-400">{error.title[0]}</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-start">Description</label>
                        <input
                            name="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            type="text"
                            id="large-input"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                        />
                             {error.description && <span className="text-sm text-red-400">{error.description[0]}</span>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-start" htmlFor="file_input">Image</label>
                        <input
                            name="image"
                            onChange={changeHandler}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                            id="file_input"
                            type="file"
                        />
                             {error.image && <span className="text-sm text-red-400">{error.image[0]}</span>}
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="w-full p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 dark:text-white dark:bg-teal-400">Ajouter</button>
                    </div>
                </form>
            </div>
        </>
    );
};
