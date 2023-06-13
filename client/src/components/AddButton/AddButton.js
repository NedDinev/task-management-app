import React from "react";

export default function AddButton(props) {
  const { setPopupActive } = props;
  return (
    <div className="addPopup" onClick={() => setPopupActive(true)}>
      +
    </div>
  );
}
