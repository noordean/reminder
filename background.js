const fetchVerse = async () => {
  const response = await fetch(
    "http://api.alquran.cloud/v1/search/death/all/en.ahmedali",
    {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }
  );
  const result = await response.json();
  alert(JSON.stringify(result.data));
  return result;
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("fetch_verses", { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "fetch_verses") {
    fetchVerse();
  }
});
