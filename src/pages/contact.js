import React from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const getContact = graphql`
  query contact {
    contact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(getContact)
  const { register, handleSubmit, errors, reset } = useForm()
  const onSubmit = data => {
    if (data) {
      Swal.fire({
        icon: "success",
        text: "Nous avons bien reçu votre demande",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
      reset()
    }
  }
  return (
    <Layout>
      <Hero
        img={data.contact.childImageSharp.fluid}
        className="hero hero-min"
      ></Hero>
      <div className="contact">
        <h3 className="section-title">Contactez nous</h3>
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form"
        >
          <label className="contact-label" htmlFor="name">
            Nom :
          </label>
          <input
            className="contact-input"
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            ref={register({ required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="errors">Ce champ est obligatoire</span>
          )}
          <label className="contact-label" htmlFor="email">
            Email :
          </label>
          <input
            className="contact-input"
            placeholder="john.doe@gmail.com"
            type="email"
            name="email"
            id="email"
            ref={register({
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="errors">Ce champ est obligatoire</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="errors">Votre email n'est pas valide</span>
          )}
          <label className="contact-label" htmlFor="message">
            Message :
          </label>
          <textarea
            placeholder="Votre message"
            className="contact-input"
            name="message"
            id="message"
            ref={register({
              required: true,
            })}
          ></textarea>
          {errors.message && errors.message.type === "required" && (
            <span className="errors">Ce champ est obligatoire</span>
          )}
          <button type="submit" className="contact-button">
            Envoyer
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
