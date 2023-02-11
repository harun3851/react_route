import { useContext } from "react";
import { AppContext } from "../App";
import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

export const  Home = () => {
  const{username}=useContext(AppContext);
  const {data:catData, isLoading, isError, refetch}=useQuery(["cat"],()=>{
    return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
  } );

  if(isError){
    return <h1>sorry there is error;</h1>

  }

  if(isLoading){
    return <h1>loading...</h1>
  }
    return (
      <div>
        
          <h1>Home:{username}:{catData?.fact}</h1>
          <button onClick={refetch}>Update data</button>
     
      </div>
  
  );
};
  
