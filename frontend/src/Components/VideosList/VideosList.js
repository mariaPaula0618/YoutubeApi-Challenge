import React, { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';
import {CardVideo} from './CardVideo';


const baseUrl = "http://localhost:8000";

export const  VideosList = () =>{


    const params = useParams();
    const [videos, setVideos] = useState([])
    const [message, setMessage] = useState(" ");


    useEffect(() => {
        if (params.keyword !== " "){
            fetch(`${baseUrl}/videos?keyword=${params.keyword}`,{
                method: "GET",
                })
                .then( response => response.json())
                .catch(error => console.error('Error:', error))
                .then( data => {
                    setVideos(data);
                    if(data.length>0){
                        setMessage("Search results for " + params.keyword)
                    }else{
                        setMessage("No results found for " + params.keyword)
                    }
                });
        }else{
            setMessage("No results found." )
        }
        

    }, [params.keyword]);
    
          return (

              <div className = "parent">

                    <p style={{textAlign: 'left', marginLeft:30}}>{message}</p>

                   
                    {videos.map((video) =>(

                        <CardVideo key = {video.id} video = {video}/>

                    )

                    )} 

                </div>



          );
}


