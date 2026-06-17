import { useEffect, useState } from "react"
import { menuAPI } from "./constants";


const useRestroMenu = (resID)=> {

    const[resInfo, setResInfo] = useState(null);

    useEffect(() => {
        setResInfo(null);
        fetchData();
    }, [resID]);

    const fetchData = async () => {
        const res = await fetch(menuAPI + resID);
        const jsonData =  await res.json();
        setResInfo(jsonData.data);
    };

    return resInfo;
}

export default useRestroMenu;