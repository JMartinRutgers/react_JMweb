import React from 'react'
import "./portfolio.css"
import LineChart from './LineChart';

  
  function Portfolio() {
    return (
        <section id='portfolio'>
            <br></br>
        <h5>Data vizualization expert</h5>
            <h2>Portfolio</h2>
            <center>
                <div style={{ width:'60%', height:400

                }}>
        <LineChart  />

            </div></center>     
        </section>
    )
}



export default Portfolio;
