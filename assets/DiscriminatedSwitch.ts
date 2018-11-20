interface NotLoaded {
  discriminator: "NotLoaded";
}

const notLoaded = () => ({
  discriminator: "NotLoaded",
});

interface Loading {
  discriminator: "Loading";
}

const loading = () => ({
  discriminator: "Loading",
});

interface Loaded {
  discriminator: "Loaded";
  data: Data;
}

const loaded = (data: Data) => ({
  discriminator: "Loaded",
  data: data,
});

type State = NotLoaded | Loading | Loaded;

let state = notLoaded();

fetchData(recieveData);
state = loading();

function recieveData(data: Data): void {
  state = loaded(data);
}

function showData(state: State): string {
  switch (state.discriminator) {
    case "NotLoaded":
      return "🤙";
    case "Loading":
      return "🌀";
    case "Loaded":
      return "📊 " + state.data;
  }
}
