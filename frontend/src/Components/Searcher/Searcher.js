import React,  {useState} from "react";
import { useHistory } from "react-router-dom";


import logo from './img/makrwatchLogo.png';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#cdcdcd',
      },
      '&:hover fieldset': {
        borderColor: '#636363',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#24a4ac',
      },
    },
  },
})(TextField);



export const Searcher = () => {

  let history = useHistory();
  const [keyword,setKeyword] = useState('')

  const handleChange = (e) =>{
    setKeyword(e.target.value)
  } 

  const handleClick = () =>{
    history.push(`/VideosList/${keyword}`)
  };
           
          return (
              <div className = "parent" style={{marginTop: 100,}}>

                <img alt = "markwatch Logo"src={logo} />

                  <div className = "form-group" style={{marginTop: 100,display:'flex',justifyContent:'center', }}>
                    <CssTextField 
                    onChange ={(e)=> handleChange(e)}
                    placeholder = "Search topics on the videos you want to find"
                    id="custom-css-outlined-input" 
                    style={{width: 900, }}
                    variant="outlined"
                    />
                    <SearchIcon style={{color: "white", borderRadius: '0px 15px 15px 0px', background:'#24a4ac',cursor:"pointer", fontSize:55}} onClick ={()=> handleClick()}/>

                   
                  </div>
              </div>

          );
}

