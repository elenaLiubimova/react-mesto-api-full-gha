import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ onUpdateAvatar, isOpen, onClose, isLoading }) => {
  const inputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({ avatar: inputRef.current.value });
  }

  useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={isLoading? 'Сохранение...' : 'Сохранить'}
      onSubmit={(evt) => handleSubmit(evt)}
    >
      <label className="edit-form__field">
        <input
          className="edit-form__item"
          ref={inputRef}
          id="avatar-input"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="edit-form__item-error avatar-input-error"></span>
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
