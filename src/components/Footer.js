import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="company_signature">
            <div className="signature small_sign"></div>
            <div className="signature_title">
              <h2>Usługi Budowlane </h2>
              <h2 className="bigger_sign">KARDYNAŁ</h2>
            </div>
          </div>
          <div className="contact_area">
            <h2>kontakt</h2>
            <div className="contact_info">
              <div className="info_detail">
                <i className="fas fa-phone-alt"></i>
                <p>+48 502 253 424</p>
              </div>
              <div className="info_detail">
                <i className="fas fa-phone-alt"></i>
                <p>+48 504 253 973</p>
              </div>
            </div>
            <div className="contact_info">
              <div className="info_detail">
                <i className="fas fa-envelope-open-text"></i>
                <p>rkardynal@onet.poczta.pl</p>
              </div>
              <div className="info_detail">
                <i className="fas fa-envelope-open-text"></i>
                <p>ulbud@onet.pl</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
