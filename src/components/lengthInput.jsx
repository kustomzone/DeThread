import React, { Component } from 'react';

const LengthInput = function(props) {
  return (
    <div>
      <input type="number" id="length" name="length" min="0" onChange={props.updateSettings} />
    </div>
  )
};

export default LengthInput;
