import React from 'react';
import Field from '../NameField/NameField';
import Button from '../SubmitButton/SubmitButton';

const CreateUserForm = () => {
  return (
    <div className="create-user ui form">
      <Field />
      <Button />
    </div>
  );
};

export default CreateUserForm;
