import React, { useState } from "react";
import DisplayConsoleForTablet from "../DisplayConsole/DisplayConsoleForTablet";
import { ReactComponent as Rocket } from "../../../assets/rocket.svg";
//Validates the data on the tablet console onclick of any button on the landing page
const ControlConsoleForTablet = ({
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
      <DisplayConsoleForTablet />
      <div className="control-console-for-tablet">
        <div className="text-center">
          <button
            onClick={() => onCapsuleClick()}
            type="button"
            className="btn btn-primary"
          >
            Capsules
          </button>
        </div>
        <div className="spacex-rocket-container">
          <Rocket className="spacex-rocket" />
        </div>
        <div>
          <input
            maxLength="15"
            onChange={(e) => handleLandingPadIdChanged(e)}
            type="text"
            className="form-control landing-pad-id-textbox"
            placeholder="Landing Pad Id"
            aria-label="Landing Pad Id"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            disabled={isLandingPadButtonDisabled}
            onClick={() => onLandingPadClick(landingPadId)}
            className="btn btn-primary"
          >
            Landing Pad
          </button>
        </div>
      </div>
    </>
  );
};

export default ControlConsoleForTablet;
