import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const Register = ({ handleRegister }) => {
  const { values, handleChange } = useForm({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = values;
    handleRegister(email, password);
  };

  return (
    <section className="reg-auth">
      <form className="reg-auth-form" onSubmit={handleSubmit} >
        <h2 className="reg-auth-form__title">Регистрация</h2>
        <input
          className="reg-auth-form__item"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <input
          className="reg-auth-form__item"
          type="password"
          placeholder="Пароль"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <button
          className="reg-auth-form__button"
          type="submit"
          aria-label="Кнопка регистрации"
        >
          Зарегистрироваться
        </button>
        <span className="reg-auth-form__description">
          Уже зарегистрированы?
          <Link to="/sign-in" className="reg-auth-form__link"> Войти</Link>
        </span>
      </form>
    </section>
  );
};

export default Register;
