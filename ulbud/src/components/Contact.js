import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";

class Contact extends Component {
  render() {
    return (
      <>
        <Menu />
        <div className="contact_section">
          <Fade top>
            <div className="name_section">
              <h2>kontakt</h2>
              <p>
                Jako ściśle współpracujace firmy można nas znaleźć pod dwoma
                nazwami
              </p>
              <div>
                <p>"UL-BUD" </p>
                oraz <p>"Usługi Budowlane Roman Kardynał" </p>{" "}
              </div>
            </div>
            <div className="contact">
              <div className="contact_form">
                <form>
                  <div className="name_inputs">
                    {" "}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Twoje imię"
                    ></input>
                    <input
                      type="email"
                      id="email"
                      placeholder="Twój e-mail"
                      required
                    ></input>
                  </div>
                  <textarea placeholder="Twoja wiadomość"></textarea>
                  <input type="submit" value="Wyślij"></input>
                </form>
              </div>
              <div className="phone-and-mail">
                <div>
                  <h2>
                    <i class="fas fa-envelope-open-text"></i> Email:
                  </h2>
                  <p> rkardynal@poczta.onet.pl</p>
                  <p> ulbud@onet.pl</p>
                </div>
                <div>
                  <h2>
                    {" "}
                    <i class="fas fa-phone-alt"></i>Numer Kontaktowy:
                  </h2>
                  <p> +48 502 253 424</p>
                  <p> +48 504 253 973</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </>
    );
  }
}

export default Contact;
