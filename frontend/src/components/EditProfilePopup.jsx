import React, { useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "../hooks/useForm";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ onUpdateUser, isOpen, onClose, isLoading }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({ name: currentUser.name, job: currentUser.about });
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: values.name,
      about: values.job,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <label className="edit-form__field">
        <input
          className="edit-form__item"
          id="name-input"
          value={values.name || ""}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="edit-form__item-error name-input-error"></span>
      </label>
      <label className="edit-form__field">
        <input
          className="edit-form__item"
          id="job-input"
          type="text"
          name="job"
          value={values.job || ""}
          onChange={handleChange}
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="edit-form__item-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
