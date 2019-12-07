const KEYWORDS = [
  "death",
  "grave",
  "punishment",
  "hereafter",
  "judgement",
  "hell"
];

const fetchVerse = async () => {
  const randomKeyword = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
  const response = await fetch(
    `http://api.alquran.cloud/v1/search/${randomKeyword}/all/en.ahmedali`,
    {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }
  );
  const result = await response.json();
  localStorage.setItem("reminder", JSON.stringify(result.data));
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("fetch_verses", { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "fetch_verses") {
    fetchVerse();
  }
});
