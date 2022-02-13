export const SET_CAPSULES_DATA = "spacex/setAllCapsulesData";
export const SET_DISPLAY_MODE = "spacex/setDisplay";
export const SET_LANPAD_DATA = "spacex/setLandingPadViaId";
export const SET_LOADING = "spacex/loading";

// Not Actions really, just used for setting the display modes for DisplayConsole
export const CAPSULE_DATA_DISPLAY_MODE = "1";
export const LANPAD_DATA_DISPLAY_MODE = "2";

export function setCapsulesData(payload) {
  return { type: SET_CAPSULES_DATA, payload };
}

export function setLanpadData(payload) {
  return { type: SET_LANPAD_DATA, payload };
}

export function setDisplayMode(payload) {
  return { type: SET_DISPLAY_MODE, payload };
}

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
}
