import React from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

const Newsletter = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const onSubmit = data => {
    if (data) {
      Swal.fire({
        icon: "success",
        text: "Vous êtes désormais inscrit à notre newletter",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
      reset()
    }
  }

  return (
    <section className="newsletter">
      <h3 className="section-title">Abonnez-vous à notre newsletter</h3>
      <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="newsletter-input"
          ref={register({
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
          })}
        />

        <button type="submit" className="newsletter-button">
          OK
        </button>
      </form>
      {errors.email && errors.email.type === "required" && (
        <span className="errors">Ce champ est obligatoire</span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span className="errors">Votre email n'est pas valide</span>
      )}
    </section>
  )
}

export default Newsletter
