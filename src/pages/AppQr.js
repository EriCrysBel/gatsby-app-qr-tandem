import React from "react"
import Layout from "../components/layout"
import CardApp from "../components/CardApp"
import BannerUser from "../components/BannerUser"
import CerrarSesion from "../components/CerrarSesion"

const AppQR = () =>{
    return(
        <>
        <Layout>
            <BannerUser/>
            <CerrarSesion/>
            <CardApp/>
            
        </Layout>
        </>
    )
}
export default AppQR