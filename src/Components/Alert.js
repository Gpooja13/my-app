import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: "50px"}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{background:"rgb(168, 213, 168)", color:"darkgreen"}}>
        <strong>{props.alert.type}</strong>{props.alert.msg}
      </div>
    </div>}
    </div>
  );
}
