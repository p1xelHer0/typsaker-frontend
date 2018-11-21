const state: State = {
  loading: false,
  data: null,
};
// 2322: Type 'null' is not assignable to
// type { loading: boolean, data: data }.

fetchData(recieveData);
state.loading = true;

function recieveData(data: Data): void {
  state.data = data;
  state.loading = false;
}
