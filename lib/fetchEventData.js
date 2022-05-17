import fetch from "node-fetch";

async function GetRawData(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};

const url = "https://en.wikipedia.org/wiki/Cricket_World_Cup";

async function GetEventInfo() {
   const rawData = await GetRawData(url);
   console.log(rawData.slice(0, 1000));
};

export default GetEventInfo
