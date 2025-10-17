import React from "react";
import "./Controls.css"; 

const Controls = ({ onMove, disabled }) => (
  <div className="keypad-container">
    <div className="keypad-row">
      <div className="keypad-btn-spacer" />
      <button className="keypad-btn" disabled={disabled} onClick={() => onMove("up")}>↑</button>
      <div className="keypad-btn-spacer" />
    </div>
    <div className="keypad-row">
      <button className="keypad-btn" disabled={disabled} onClick={() => onMove("left")}>←</button>
      <div className="keypad-btn-spacer" />
      <button className="keypad-btn" disabled={disabled} onClick={() => onMove("right")}>→</button>
    </div>
    <div className="keypad-row">
      <div className="keypad-btn-spacer" />
      <button className="keypad-btn" disabled={disabled} onClick={() => onMove("down")}>↓</button>
      <div className="keypad-btn-spacer" />
    </div>
  </div>
);

export default Controls;
