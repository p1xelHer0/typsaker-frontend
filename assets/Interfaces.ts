interface State {
  user: string;
  count: number;
  things: Array<string>;
}

interface Module {
  states: Array<State>;
  ready: boolean;
  nested: {
    value1: "fixed";
    value2: string;
  };
}
