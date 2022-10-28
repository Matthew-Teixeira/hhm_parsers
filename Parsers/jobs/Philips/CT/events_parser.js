("use strict");
require("dotenv").config({ path: "../../.env" });
const fs = require("node:fs");
const readline = require("readline");
const { log } = require("../../../logger");
const { get_sme_modality } = require("../../../utils/regExHelpers");
const bulkInsert = require("../../../utils/queryBuilder");
const convertDates = require("../../../utils/dates");
const groupsToArrayObj = require("../../../utils/prep-groups-for-array");
const mapDataToSchema = require("../../../utils/map-data-to-schema");
const { philips_ct_events_schema } = require("../../../utils/pg-schemas");

async function phil_ct_events(filePath) {
  const manufacturer = "philips";
  const version = "events";
  const dateTimeVersion = "type_1";
  const data = [];
  const sme_modality = get_sme_modality(filePath);
  const SME = sme_modality.groups.sme;
  const modality = sme_modality.groups.modality;

  await log("info", "NA", `${SME}`, "phil_ct_events", "FN CALL", {
    sme: SME,
    modality,
    file: filePath,
  });

  const ct_events_re =
    /(?<eventtime>.*?)[|](?<blob>.*?)[|](?<type>.*?)[|](?<tstampnum>.*?)[|](?<eal>.*?)[|](?<level>.*?)[|](?<ermodulernum>.*?)[|](?<dtime>.*?)[|](?<msg>.*)?/;

  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      if (line.match(ct_events_re) === null) {
        continue;
      }
      let matches = line.match(ct_events_re);
      convertDates(matches.groups, dateTimeVersion);
      const matchData = groupsToArrayObj(SME, matches.groups);
      data.push(matchData);
    }

    data.shift();

    const mappedData = mapDataToSchema(data, philips_ct_events_schema);

    const dataToArray = mappedData.map(({ ...rest }) => Object.values(rest));
    await bulkInsert(
      dataToArray,
      manufacturer,
      modality,
      filePath,
      version,
      SME
    );
  } catch (error) {
    await log("error", "NA", `${SME}`, "phil_ct_events", "FN CALL", {
      sme: SME,
      modality,
      file: filePath,
      error: error.message,
    });
  }
}

module.exports = phil_ct_events;