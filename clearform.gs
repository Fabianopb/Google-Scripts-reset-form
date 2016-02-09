function Initialize() {
 
  try {
 
    var triggers = ScriptApp.getProjectTriggers();
 
    for (var i in triggers)
      ScriptApp.deleteTrigger(triggers[i]);
    
    ScriptApp.newTrigger("clearResponses")
    
    //Weekly triger
    .timeBased().onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(8).create();
    
    //Let's say you'd like a monthly trigger, every 1st day at 9am. In this case you'd use: 
    //.timeBased().onMonthDay(1).atHour(9).create();
 
  } catch (error) {
    throw new Error(error.message);    
  }
}

function clearResponses() {
  FormApp.openById("1o8kEIaITj5Mi8V9RPlSrXuTcy7hpmNHI2NKcRR-eU7M").deleteAllResponses();
}
