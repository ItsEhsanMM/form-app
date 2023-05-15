import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const toastNotif = (text,type) => {
    toast[type](text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }