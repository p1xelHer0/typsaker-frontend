type State = "NotLoaded" | "Loading" | Data;

state = "NotLoaded";

fetchData(recieveData);
state = "Loading";

function recieveData(data: Data): void {
  state = data;
}
