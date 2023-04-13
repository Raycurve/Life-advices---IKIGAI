import React, { useState } from "react";
import {useEffect} from 'react';
import './App.css';
import axios from 'axios';

export default function App(){
    const [state,setState] = useState('');
    const fetchAd=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((res)=>{
            // console.log(res);
            setState(res.data.slip.advice);
            console.log(state);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    useEffect(()=>{
        fetchAd();
    },[] )
    return(
        <>
           
            <div className="app">
                <div className="header">
                    <h1>I K I G A I</h1>
                </div>
                <div className="box"><i className="fas fa-quote-left fa2"></i>
                <div className="text"><i className="fas fa-quote-right fa1"></i>
                    <div className="head">
                        {/* <h3>Quote the day</h3> */}
                        <p>{state}</p>
                    </div>
                </div>
                </div>
                <button className="button-30" onClick={fetchAd}>
                        <span>Give me Advice</span>
                </button>
                <div className="foot">
                    <h3>Made with ❤ by Raycurve</h3>
                </div>
            </div>
            
        </>
       
    )
}