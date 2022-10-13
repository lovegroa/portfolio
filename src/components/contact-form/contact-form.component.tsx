import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import {ContactFormComponent} from './contact-form.styles';
import {ButtonContainer, CheckItOutButton} from '../project/project.styles';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mknezqaz');
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <>
      <p style={{textAlign: 'center'}}>
        or you can reach me by completing the form below
      </p>
      <ContactFormComponent onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <label htmlFor="email">Your message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <ButtonContainer>
          <CheckItOutButton type="submit" disabled={state.submitting}>
            <span>Submit</span>
          </CheckItOutButton>
        </ButtonContainer>
      </ContactFormComponent>
    </>
  );
};

export default ContactForm;
