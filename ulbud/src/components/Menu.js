import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Menu extends Component {
  state={
    menuChangedBackground:false,
    menuBtnClicked:false
  }
  menuClick=()=>{
    if(this.state.menuBtnClicked== false){
      this.setState({
      menuBtnClicked:true
    })
    }else{this.setState({
      menuBtnClicked:false
    })
          }
      } ;
  changingBackground=()=>{
   let scroll=window.pageYOffset;
    if(scroll!==0){
     this.setState({
       menuChangedBackground:true
     })
   }else{
     this.setState({
       menuChangedBackground:false
     })
   }
 }
  componentDidMount(){
window.addEventListener("scroll", ()=>{
  this.changingBackground()
})
  } 
  render() {
    return (
      <>
        <div className={this.state.menuChangedBackground ? "menu menu_changed" : "menu"} >
          <NavLink exact to ='/' className="company_signature">
            <div className="signature"></div>
            <div >
              <h2>Usługi Budowlane </h2>
            <h2 className="bigger_sign">KARDYNAŁ</h2>
            </div>            
          </NavLink>
          <div className={this.state.menuBtnClicked ? "menu_btn cross" : "menu_btn"} onClick={this.menuClick}>
            <div className= "btn_line"></div>
            <div className="btn_line"></div>
            <div className="btn_line"></div>
          </div>
          <div className={this.state.menuBtnClicked ? "menu_section show" : "menu_section"}>
            <NavLink onClick={this.menuClick} className="navigation_part" exact to ='/'>Strona Główna</NavLink>
            <NavLink onClick={this.menuClick} className="navigation_part" exact to ='/realization'>Realizacje</NavLink>
            <NavLink onClick={this.menuClick} className="navigation_part references" exact to ='/references'>Referencje i Certyfikaty</NavLink>
            <NavLink onClick={this.menuClick} className="navigation_part" exact to ='/job'> Praca</NavLink>
            <NavLink onClick={this.menuClick} className="navigation_part" exact to ='/contact'> Kontakt</NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
