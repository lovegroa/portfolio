import React, {useEffect, useRef} from 'react';
import ContactForm from '../../components/contact-form/contact-form.component';
import {
  ButtonContainer,
  CheckItOutButton,
} from '../../components/project/project.styles';
import useOnScreen from '../../utils/functions/useOnScreen';
import {ContactContainer} from './contact.styles';

const Contact = ({ref2}) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      if (ref2) {
        if (ref2.current) {
          ref2.current.scrollIntoView({inline: 'center'});
        }
      }
    }
  }, [isVisible, ref2]);
  return (
    <ContactContainer id={'contact'} ref={ref}>
      <h2 data-aos="fade-down">Contact</h2>
      <p>You can check me out on:</p>
      <ul
        style={{
          listStyle: 'none',
          padding: '0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <li>
          <a
            style={{
              cursor: 'pointer',
            }}
            href="https://www.linkedin.com/in/alexlovegrove/"
          >
            <ButtonContainer>
              <CheckItOutButton role="button">
                <span>LinkedIn</span>
              </CheckItOutButton>
            </ButtonContainer>
          </a>
        </li>
        <li>
          <a
            style={{
              cursor: 'pointer',
            }}
            href="https://github.com/lovegroa"
          >
            <ButtonContainer>
              <CheckItOutButton role="button">
                <span>Github</span>
              </CheckItOutButton>
            </ButtonContainer>
          </a>
        </li>
      </ul>

      <ContactForm></ContactForm>
    </ContactContainer>
  );
};

export default Contact;
