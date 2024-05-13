  import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import './Convertor.css'
import {Button, FormControl, Paper, Select, TextField} from "@material-ui/core";


function Convertor() {
        const [text1,settext1]=useState(1);
        const [text2, settext2]=useState(1);
        const [country, setcountry]=useState([]);
        const [country2, setcountry2]=useState([]);
        const [value1, setvalue1]=useState(1);
        const [value2, setvalue2]=useState(1);
      
        useEffect(()=>{
          getdata();
        },[]);
        async function getdata(){
          const result=await Axios.get("http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284");
          console.log(result.data);
          setcountry(result.data.rates);
          setcountry2(result.data.rates);
        }
        function convert(e){
          e.preventDefault();
          let num=(value2/value1) * text1 ;
          settext2(num);
        }
    return (
        <div>
          <Paper className='paper'> 
              <h3>Convertisseur de devises</h3>
              <form className='idk' onSubmit={convert}>
                <div>
                  <TextField variant="outlined" color='red' value={text1 || ""} onChange={(e)=>settext1(e.target.value)} autocomplete='off'/>
                  <FormControl className='dropdown' variant ="outlined" onChange={(e)=>setvalue1(e.target.value)}>
                    <Select native>
                      {Object.keys(country).map((value,index)=>(
                      <option key={index} value={country[value]}>{value}</option>))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                <TextField variant="outlined" color="warning" value={text2 || ""}/>
                  <FormControl className='dropdown' variant ="outlined" onChange={(e)=>setvalue2(e.target.value)}>
                    <Select native>
                      {Object.keys(country2).map((value,index)=>(
                      <option key={index} value={country[value]}>{value}</option>))}
                    </Select>
                  </FormControl>
                </div>
                <Button type='submit' className='button' variant='container'>Convertir</Button>
              </form>
          </Paper>
        </div>
      );
    };

    
    export default Convertor; 