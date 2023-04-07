import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, isLoading }) => {
  const { values, handleChange, setValues } = useForm({});

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace(values.name, values.link);
  }

  useEffect(() => {
    setValues({});
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-photo"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Создание..." : "Создать"}
    >
      <label className="edit-form__field">
        <input
          className="edit-form__item"
          value={values.name || ""}
          onChange={handleChange}
          id="place-input"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="edit-form__item-error place-input-error"></span>
      </label>
      <label className="edit-form__field">
        <input
          className="edit-form__item"
          value={values.link || ""}
          onChange={handleChange}
          id="photo-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="edit-form__item-error photo-input-error"></span>
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
