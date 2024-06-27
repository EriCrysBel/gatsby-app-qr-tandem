import React from 'react'
import Layout from "../components/layout";


const CambiarContra = () => {
  return (
    <>
      <Layout>
        <h1>Cambiar Contraseña</h1>
        <form action="/cambiarcontra" method="post">
        <label for="oldpassword">Contraseña Actual:</label><br />
        <input type="password" id="oldpassword" name="oldpassword" required/><br/>
        <label for="newpassword">Nueva Contraseña:</label><br />
        <input type="password" id="newpassword" name="newpassword" required/><br/>
        
        </form>
      </Layout>
    </>
  )
}

export default CambiarContra
