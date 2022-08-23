import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import './App.css'
import ShowCard from "./components/ShowCard";

const App = () => {

    const [showData, setShowData] =  useState([])

    useEffect(() => {

        async function searchAPI() {
            const result = await axios.get("https://api.tvmaze.com/search/shows?q=girls")
            setShowData(result.data)
        }

        searchAPI()

    }, [])

    return <>
            {showData.map((s) => <ShowCard key={s["show"].id} data={s["show"]} />)}
           </>
}

export default App;