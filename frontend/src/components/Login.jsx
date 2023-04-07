import React from "react";
import { useForm } from "../hooks/useForm";

const Login = ({ handleAuthorize }) => {
  const { values, handleChange } = useForm({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    if (!values.email || !values.password) {
      return;
    }
    handleAuthorize(values.email, values.password);
  };

  return (
    <section className="reg-auth">
      <form className="reg-auth-form" onSubmit={handleSubmit} >
        <h2 className="reg-auth-form__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </section>
  );
};

export default Login;
