import React from "react"
function Footer() {
    const year = new Date()
    return <h2>copyright {year.toString()}</h2>
}
export default Footer;