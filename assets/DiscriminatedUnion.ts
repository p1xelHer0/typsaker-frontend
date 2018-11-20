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
