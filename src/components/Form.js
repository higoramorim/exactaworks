import React from 'react';


const Form = ({ title, onSubmit, children }) => {
  const submit = evt => {
    evt.preventDefault();
    onSubmit(evt);
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__container">
        {title && <h1 className="form__title">{title}</h1>}

        {children}
      </div>
    </form>
  )
}

export default Form;