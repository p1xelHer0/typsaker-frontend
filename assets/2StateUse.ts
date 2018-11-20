const state: State = {
  loading: false,
  data: null,
};

fetchData(recieveData);
state.loading = true;

function recieveData(data: Data): void {
  state.data = data;
  state.loading = false;
}
