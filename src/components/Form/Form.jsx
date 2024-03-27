import "./Form.css";
import { Button } from "../Button/Button";

function Form() {
  return (
    <form className="contact-form">
      <label htmlFor="name" className="contact-form__label">Name:</label>
      <input type="text" id="name" className="contact-form__input" />

      <label htmlFor="email" className="contact-form__label">Email:</label>
      <input type="text" id="email" className="contact-form__input" />

      <label htmlFor="message" className="contact-form__label">Message:</label>
      <textarea name="message" id="message" cols="15" rows="5" className="contact-form__textarea"></textarea>

      <Button text={'Submit'} className="contact-form__button"></Button>
  </form>
  )
}

export { Form }
