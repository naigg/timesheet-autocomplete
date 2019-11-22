var request = require("request");
var config = require("./config");

if (config) {
  var url = config.url;
  var tempoContext = config.tempoContext;
  var tempoSession = config.tempoSession;
  var workerId = config.workerId;

  var timeSpentHours = 8; // How many hours you want to work on
  var timeSpentSeconds = timeSpentHours * 3600; // Since tempo requires the time spent in seconds, calculate the hours to second

  /**
   * Might be required to have an API to search for the taskId
   * For now: you must use the search bar in TEMPO to find the correct taskId
   */
  var taskId = config.taskId;
  var yearString = config.yearString;
  var monthString = config.monthString;
  var listOfDatesToEnter = config.listOfDatesToEnter;

  function callback(error, response, body) {
    if (body) {
      var parsedBody = JSON.parse(body);
      var item = parsedBody[0];
      if (item) {
        console.log(
          "Day for: " +
            item.dateCreated +
            " is complete, for " +
            item.billableSeconds / 3600 +
            " hours"
        );
      }
    }
  }

  listOfDatesToEnter.forEach(function(date) {
    var startDate = yearString + "-" + monthString + "-" + date;

    var optionBody = {
      attributes: {},
      billableSeconds: "",
      originId: -1,
      workerId: workerId,
      comment: null,
      started: startDate,
      timeSpentSeconds: timeSpentSeconds,
      originTaskId: taskId,
      remainingEstimate: 0,
      endDate: null,
      includeNonWorkingDays: false
    };

    var options = {
      url: url,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Tempo-Context": tempoContext,
        "Tempo-Session": tempoSession,
        Accept: "*/*"
      },
      body: JSON.stringify(optionBody)
    };

    request(options, callback);
  });
}
