import React, { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';
import {CardVideo} from './CardVideo';


const baseUrl = "http://localhost:8000";

export const  VideosList = () =>{


    const params = useParams();
    const [videos, setVideos] = useState([])

    useEffect(() => {
        console.log(params.keyword)
        fetch(`${baseUrl}/videos?keyword=${params.keyword}`,{
            method: "GET",
            })
            .then( response => response.json())
            .then( data => {
                setVideos(data);
            });

    }, [params.keyword]);
    
          return (

              <div className = "parent">

                    <p style={{textAlign: 'left', marginLeft:30}}>Search Results for "{params.keyword}"</p>;

                    {videos.map((video) =>(

                        <CardVideo key = {video.id} video = {video}/>

                    )

                    )} 

                </div>



          );
}


