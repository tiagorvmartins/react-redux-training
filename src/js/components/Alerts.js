import React, { Component } from "react";
import { connect } from "react-redux";


import { deleteNotification } from "../actions/index";

import './Alerts.css';





class Popup extends React.Component {
    render() {      
      return (
        
          <div className={`modal-content ${this.props.class}`}>
            <span className="close" onClick={() => 
              { 
                this.props.closeListener(this.props.id);
              }}>&times;</span>
            <div className="text-content">
                <strong>{this.props.type}: </strong>{this.props.text}
            </div>
          </div>          
        
      );
    }
  }




class AlertsComponent extends Component {
    constructor(props) {
      super(props);
    }  

    render() {       
      return this.props.notifications.length > 0 && <div className="modal">        
              {  this.props.notifications.map(item => 
                <Popup key={item.id} id={item.id} closeListener={this.props.deleteNotification} 
                      class={item.type} type={item.strong} text={item.text} />) }
                </div>;
      
    }
  }


  const mapStateToProps = state => {
    return { 
        articles: state.articles,
        notifications: state.notifications,
        error: state.error,
        errorMessage: state.errorMessage,
        information: state.information,
        informationMessage: state.informationMessage
    };
  };


const Alerts = connect(
    mapStateToProps,
    { deleteNotification  }
  )(AlertsComponent);
  
  export default Alerts;