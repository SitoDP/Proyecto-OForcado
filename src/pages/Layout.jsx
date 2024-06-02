import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import React from "react"



const Layout = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100hv",
            }}
        >
            <NavigationBar />
            {/* Hero */}
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout