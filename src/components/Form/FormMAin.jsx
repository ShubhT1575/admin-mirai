import React from "react";
import FormHead from "./FormHead";
import FormRow from "./FormRow";

function FormMAin() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <FormHead />
        <FormRow />
      </div>
    </div>
  );
}

export default FormMAin;
