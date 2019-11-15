import React from 'react';

const Form = ({ title, onSubmit, children }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__container">
        {title && <h1 className="form__title">{title}</h1>}

        {children}
      </div>
    </form>
  )
}

export default Form;