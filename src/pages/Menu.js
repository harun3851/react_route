import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react";
import { AppContext } from "../App";


export const  Menu = () => {
    const{username}=useContext(AppContext);
    return (
        <div>
                   menu:{username}
           <ChangeProfile/>
        </div>


    );
};
