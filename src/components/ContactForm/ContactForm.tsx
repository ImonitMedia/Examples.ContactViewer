import { ErrorMessage, Field, Form, Formik } from 'formik';
import moment from 'moment';
import type { ManageContact } from 'types';
import { object, string } from 'yup';

import { StyledContactForm, StyledFormGroup } from './styled';
import type { Props } from './types';

const initialData = {
  birthday: '',
  email: '',
  name: '',
  phone: '',
};

export const ContactForm = ({ action, contact, onCancel, onSubmit }: Props) => {
  const { birthday, email, name, phone } = contact || initialData;

  function handleCancel() {
    onCancel();
  }

  return (
    <StyledContactForm aria-label='contact-form'>
      <h2>{action === 'add' ? 'Add new contact' : `Edit ${name}`}</h2>

      <Formik
        initialValues={
          action === 'edit'
            ? {
                birthday: contact ? moment(birthday).format('YYYY-MM-DD') : '',
                email,
                name,
                phone,
              }
            : {
                birthday: '',
                email: '',
                name: '',
                phone: '',
              }
        }
        validationSchema={object().shape({
          birthday: string().required('Birthday is required'),
          email: string().email('Email is invalid').required('Email is required'),
          name: string().required('First Name is required'),
          phone: string().required('Phone number is required'),
        })}
        onSubmit={(fields: ManageContact) => onSubmit(fields)}
      >
        <Form>
          <StyledFormGroup>
            <label htmlFor='contact-name'>Name:</label>
            <ErrorMessage aria-label='contact-form-error-name' name='name' component='div' />
            <Field aria-label='contact-form-input-name' type='text' name='name' id='contact-name' />
          </StyledFormGroup>
          <StyledFormGroup>
            <label htmlFor='contact-birthday'>Birthday:</label>
            <ErrorMessage
              aria-label='contact-form-error-birthday'
              name='birthday'
              component='div'
            />
            <Field
              aria-label='contact-form-input-birthday'
              type='date'
              name='birthday'
              id='contact-birthday'
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <label htmlFor='contact-email'>Email:</label>
            <ErrorMessage aria-label='contact-form-error-email' name='email' component='div' />
            <Field
              aria-label='contact-form-input-email'
              type='email'
              name='email'
              id='contact-email'
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <label htmlFor='contact-phone'>Phone:</label>
            <ErrorMessage aria-label='contact-form-error-phone' name='phone' component='div' />
            <Field
              aria-label='contact-form-input-phone'
              type='phone'
              name='phone'
              id='contact-phone'
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <button aria-label='contact-form-submit-btn' type='submit'>
              Submit
            </button>
            <button aria-label='contact-form-cancel-btn' type='button' onClick={handleCancel}>
              Cancel
            </button>
          </StyledFormGroup>
        </Form>
      </Formik>
    </StyledContactForm>
  );
};
