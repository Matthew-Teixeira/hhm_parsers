const { log } = require("../logger");

async function testTabs(matches, SME, count) {
  const tabRe = /\t/g;
  if (
    tabRe.test(matches.groups.host_col_1) ||
    tabRe.test(matches.groups.host_col_2) ||
    tabRe.test(matches.groups.host_info)
  ) {
    console.log("Tab issue at line # " + count);
    log("info", "55", `${SME}`, "runJob", "Failed Regex", {
      group: matches[0],
    });
  }
}

function get_sme_modality(filePath) {
  const smeRe = /(?<sme>SME\d{5})[\/_](?<modality>[A-Z]+)/;
  if (filePath.match(smeRe) === null) {
    const smeRe = /(?<modality>[A-Z]+)[\/_](?<sme>SME\d{5})/
    return filePath.match(smeRe);
  }
  return filePath.match(smeRe);
}

function get_sme(filePath) {
  const smeRe = /(?<sme>SME\d{5})/;
  if (filePath.match(smeRe) === null) {
    const smeRe = /(?<sme>SME\d{5})/
    return filePath.match(smeRe)[0];
  }
  return filePath.match(smeRe)[0];
}

function blankLineTest(line) {
  const blankLineTest = /^[ \t\n]*$/;
  return isNewLine = blankLineTest.test(line);
}

// SR\s(\d+).*?EN\s\1

module.exports = {
  testTabs,
  get_sme_modality,
  get_sme,
  blankLineTest
};