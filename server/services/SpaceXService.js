const axios = require("axios");
const dbPool = require("../db");
const constants = require("../common/constants");

class SpaceXService {
  /**
   *
   * @returns {Promise<{message: *, status: string}|any>}
   */
  static getConsolesFromAPISortedByLaunchDate = async () => {
    try {
      let res = await axios.get(
        `${constants.BASE_URL}/capsules?sort=original_launch`
      );
      return res.data;
    } catch (e) {
      return {
        status: "error",
        message: e.message,
      };
    }
  };

  /**
   *
   * @param id
   * @returns {Promise<{message: *, status: string}|*>}
   */
  static getLandingPadDataById = async (id) => {
    try {
      const fromDb = await this.getSpaceDataFromDB(id);
      if (fromDb.length > 0) {
        return fromDb;
      }
      const responseData = await axios.get(
        `${constants.BASE_URL}/landpads/${id}`
      );
      return await this.insertSpaceDataIntoDB(id, responseData.data);
    } catch (e) {
      return {
        status: "error",
        message: e.message,
      };
    }
  };

  /**
   *
   * @param lanpadId
   * @returns {Promise<*>}
   */
  static getSpaceDataFromDB = async (lanpadId) => {
    return await dbPool.query("SELECT * FROM spaceData WHERE id = ?", [
      lanpadId,
    ]);
  };

  /**
   *
   * @param lanpadId
   * @param lanpadData
   * @returns {Promise<*>}
   */
  static insertSpaceDataIntoDB = async (lanpadId, lanpadData) => {
    await dbPool.query("INSERT INTO spaceData VALUES (?, ?);", [
      lanpadId,
      JSON.stringify(lanpadData),
    ]);
    return await this.getSpaceDataFromDB(lanpadId);
  };
}

module.exports = SpaceXService;
