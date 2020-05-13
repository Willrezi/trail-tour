import React from "react"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>OUPS cette page n'existe pas !!!</h1>
        <p>
          Oui, c’est triste… Nous aussi on aurait préféré qu’il y ait quelque
          chose ici... On ne sait pas trop comment vous êtes arrivé là mais on
          espère que ce n'était pas trop important...
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
