import React, { useState, useEffect } from 'react';
import { API } from '../config';

export default function Home() {
    const [res , setRes] = useState("");

    useEffect(() => {
      fetch(`${API}/home`, {
          method: 'GET',
          headers: {
              'Content-Type': 'text/html',
          }
      })
      .then( resp => resp.text())
      .then( resp => setRes(resp))
      .catch( error => console.log(error))
  },[])

    return (
        <div>{res}</div>
    )
};