import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export const CardVideo = (props) => {


    const video = props.video;

    const handleClickVideo = () =>{
        window.location.href = video.url; 


    }

    const description = video.description.substring(0, 100) + " ...";
    //
    const nf = new Intl.NumberFormat("en-US"); 
    const views = nf.format(video.viewCount)

    return (

        <div className="col" >
            <div>

                <Card className="card" variant="outlined"
                 style={{cursor:"pointer",display: 'flex',marginLeft:50, marginBottom:20,marginTop:20,border: "none"}} 
                 onClick ={()=> handleClickVideo()}
                 >
                    <CardMedia
                     style={{width: 300,}}
                     image={video.thumbnail}
                     title="Live from space album cover"
                    />
                    <CardContent 
                    style={{textAlign: 'left',}}
                    >
                    <Typography variant="h5" component="h2">
                        {video.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {video.chanelTitle}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" >
                        <span style={{color: "red", fontWeight: 'bolder', }}>{views}</span>  Views
                    </Typography>
                    <Typography variant="body2" color="textSecondary"
                     style={{marginBottom:5}} >
                        {description}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {video.publishedAt}
                    </Typography>

                    </CardContent>

                </Card>
          
            </div>
                <Divider variant="middle"  />
        </div>

    )





}








