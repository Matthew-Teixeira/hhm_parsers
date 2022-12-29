("use strict");
require("dotenv").config();
const crypto = require("crypto");
const { log } = require("./logger");
const pgPool = require("./db/pg-pool");
const siemens_parser = require("./jobs/Siemens");
const philips_parser = require("./jobs/Philips");
const ge_parser = require("./jobs/GE");

const filePaths = {
  philips: {
    cv_systems: [
      "SME11722",
      "SME00445",
      "SME00446",
      "SME07761",
      "SME00782",
      "SME00785",
      "SME00786",
      "SME01227",
      "SME02548",
      "SME02535",
      "SME02552",
      "SME07852",
      "SME07855",
      "SME07860",
      "SME07862",
      "SME07864",
      "SME08102",
      "SME11259",
      "SME11530",
      "SME11532",
      "SME11927",
      "SME08325",
      "SME00888",
      "SME00892",
      "SME00349",
      "SME00529",
      "SME00530",
      "SME00508",
      "SME00509",
      "SME00510",
      "SME00511",
      "SME01387",
      "SME01388",
      "SME01389",
      "SME01397",
      "SME01398",
      "SME01396",
      "SME01390",
      "SME01391",
      "SME01392",
      "SME01393",
      "SME11724",
      //"SME11723", no such file or directory
      //"SME11677", no such file or directory
    ],
    mri_systems: ["SME01138"],
  },
  ge: {
    ct_systems: [
      "SME12444",
      "SME12446",
      "SME12445",
      "SME12451",
      "SME12412",
      "SME12413",
      "SME12443",
      "SME00896",
      "SME01091",
      "SME00847",
      "SME01430",
      "SME01429",
      "SME01431",
      "SME01432",
      "SME01433",
      "SME10071",
    ],
    mri_systems: ["SME12424", "SME01096", "SME01422"],
  },
  siemens: {
    systems: [
      "SME01136",
      "SME08716",
      "SME01101",
      "SME00885",
      "SME00894",
      "SME01092",
      "SME01129",
      "SME00868",
      "SME08712",
      "SME00854",
      "SME00855",
      "SME00871",
      "SME01094", //12gb file not there
    ],
  },
};

const all = [
  "SME01136",
  "SME08716",
  "SME01101",
  "SME00885",
  "SME00894",
  "SME01092",
  "SME01129",
  "SME00868",
  "SME08712",
  "SME00854",
  "SME00855",
  "SME00871",
  "SME12424",
  "SME01096",
  "SME01422",
  "SME12444",
  "SME12446",
  "SME12445",
  "SME12451",
  "SME12412",
  "SME12413",
  "SME12443",
  "SME00896",
  "SME01091",
  "SME00847",
  "SME01430",
  "SME01429",
  "SME01431",
  "SME01432",
  "SME01433",
  "SME10071",
  "SME01138",
  "SME00445",
  "SME00446",
  "SME07761",
  "SME00782",
  "SME00785",
  "SME00786",
  "SME01227",
  "SME02548",
  "SME02535",
  "SME02552",
  "SME07852",
  "SME07855",
  "SME07860",
  "SME07862",
  "SME07864",
  "SME08102",
  "SME11259",
  "SME11530",
  "SME11532",
  "SME11927",
  "SME08325",
  "SME00888",
  "SME00892",
  "SME00349",
  "SME00529",
  "SME00530",
  "SME00508",
  "SME00509",
  "SME00510",
  "SME00511",
  "SME01387",
  "SME01388",
  "SME01389",
  "SME01397",
  "SME01398",
  "SME01396",
  "SME01390",
  "SME01391",
  "SME01392",
  "SME01393",
  "SME11722",
  "SME11724",
];

/* 
const determineManufacturer = async (jobId, sme) => {
  try {
    let queryString =
      "SELECT id, manufacturer, hhm_config, file_config from systems WHERE id = $1";
    let value = [sme];
    const sysConfigData = await pgPool.query(queryString, value);

    await log("info", jobId, sme, "determineManufacturer", "FN CALL");

    switch (sysConfigData.rows[0].manufacturer) {
      case "Siemens":
        await siemens_parser(jobId, sysConfigData.rows[0]);
        break;
      case "Philips":
        await philips_parser(jobId, sysConfigData.rows[0]);
        break;
      case "GE":
        await ge_parser(jobId, sysConfigData.rows[0]);
        break;
      default:
        break;
    }
  } catch (error) {
    await log("error", "NA", "NA", "determineManufacturer", "FN CATCH", {
      error: error,
    });
  }
};

const onBoot = async (systems_list) => {
  try {
    await log("info", "NA", "NA", "onBoot", `FN CALL`);
    console.time();

    for await (const system of systems_list) {
      let jobId = crypto.randomUUID();
      await determineManufacturer(jobId, system);
    }
    console.log("*************** END ***************");
    console.timeEnd();
    return;
  } catch (error) {
    await log("error", "NA", "NA", "onBoot", "FN CATCH", {
      error: error,
    });
  }
};

onBoot(["SME01444"]);
 */

const determineManufacturer = async (jobId, system) => {
  try {
    await log("info", jobId, system.id, "determineManufacturer", "FN CALL");
    console.log(system.id)

    switch (system.manufacturer) {
      case "Siemens":
        await siemens_parser(jobId, system);
        break;
      case "Philips":
        await philips_parser(jobId, system);
        break;
      case "GE":
        await ge_parser(jobId, system);
        break;
      default:
        break;
    }
  } catch (error) {
    await log("error", jobId, system.id, "determineManufacturer", "FN CATCH", {
      error: error,
    });
  }
};

const onBoot = async () => {
  try {
    await log("info", "NA", "NA", "onBoot", `FN CALL`);
    console.time();

    const system_array = await pgPool.query(
      "SELECT id, manufacturer, hhm_config, file_config from systems WHERE hhm_config IS NOT NULL"
    );

    for await (const system of system_array.rows) {
      let jobId = crypto.randomUUID();
      await determineManufacturer(jobId, system);
    }
    console.log("*************** END ***************");
    console.timeEnd();
    return;
  } catch (error) {
    await log("error", "NA", "NA", "onBoot", "FN CATCH", {
      error: error,
    });
  }
}; 

onBoot();

// scp -r avante-debian:/home/matt-teixeira/hep3/hhm_parsers/Parsers/test_data SME01444