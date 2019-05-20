import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"


export default () => (
  <div style={{ color: `teal` }}>

    <Header headerText="Whitney Bolar" /> 
    <Header headerText="Beetles" /> 
    <Header headerText="Paul" /> 

    <Link to="/contact/">Contact</Link>

    <p>Such wow. Very React.</p>
  </div>
)