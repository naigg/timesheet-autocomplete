// URL to talk to
var url = "https://app.tempo.io/rest/tempo-timesheets/4/worklogs/";

var tempoContext = "";

// This is required to authenticate the automation
var tempoSession = "";

// This might be required, not too sure how to retrieve this worker ID. This is UNIQUE to each user
var workerId = "";

// Task ID is required (you have to find what task ID you are using)
var taskId = "";

// Strings for the dates
var yearString = "2019";
var monthString = "11";

/*
  List down all the dates to add worklog on, CSV, eg:
    - ['26', '27', '28']
*/
var listOfDatesToEnter = [];

module.exports = {
  url,
  tempoContext,
  tempoSession,
  workerId,
  taskId,
  yearString,
  monthString,
  listOfDatesToEnter
};
