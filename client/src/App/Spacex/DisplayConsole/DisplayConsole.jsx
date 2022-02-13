import React from "react";
import { useSelector } from "react-redux";
import { CAPSULE_DATA_DISPLAY_MODE } from "../../../redux/actions";
import loader from "../../../assets/loader.gif";
//Display console for the desktop
const DisplayConsole = () => {
  let capsulesData = useSelector((state) => state.spaceData.capsulesData);
  const displayMode = useSelector((state) => state.spaceData.displayMode);
  const landingPadData = useSelector((state) => state.spaceData.landingPadData);
  const isLoading = useSelector((state) => state.spaceData.loading);

  return (
    <div className="jumbotron display-console">
      <img src={loader} className="loader" hidden={!isLoading} alt="Loader" />
      {displayMode === CAPSULE_DATA_DISPLAY_MODE && capsulesData.length < 1 ? (
        <pre>Welcome to SpaceX Console!</pre>
      ) : (
        <pre>
          {displayMode === CAPSULE_DATA_DISPLAY_MODE
            ? JSON.stringify(capsulesData, null, 2)
            : JSON.stringify(landingPadData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DisplayConsole;
