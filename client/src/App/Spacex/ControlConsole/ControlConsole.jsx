import React, { useState } from "react";
import DisplayConsole from "../DisplayConsole/DisplayConsole";
import { ReactComponent as Rocket } from "../../../assets/rocket.svg";
//Validates the data on the desktop console onclick of any button on the landing page
const ControlConsole = ({
  onCapsuleClick,
  onLandingPadClick,
  validateLandingPadId,
}) => {
  const [landingPadId, setLandingPadId] = useState("");
  const [isLandingPadButtonDisabled, setIsLandingPadButtonDisabled] = useState(
    true
  );

  const handleLandingPadIdChanged = (e) => {
    let val = e.target.value;
    setIsLandingPadButtonDisabled(validateLandingPadId(val));
    setLandingPadId(val);
  };

  return (
    <>
      <DisplayConsole />
      <div className="row control-console">
        <button
          type="button"
          onClick={() => onCapsuleClick()}
          className="btn btn-primary"
        >
          Capsules
        </button>
        <span className="spacex-rocket-container">
          <Rocket className="spacex-rocket" />
        </span>
        <input
          type="text"
          maxLength="15"
          onChange={(e) => handleLandingPadIdChanged(e)}
          className="form-control landing-pad-id-textbox"
          placeholder="Landing Pad Id"
          aria-label="Landing Pad Id"
        />
        <button
          disabled={isLandingPadButtonDisabled}
          onClick={() => onLandingPadClick(landingPadId)}
          type="button"
          className="btn btn-primary"
        >
          Landing Pad
        </button>
      </div>
    </>
  );
};

export default ControlConsole;
