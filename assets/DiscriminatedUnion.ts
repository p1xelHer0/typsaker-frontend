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

// {1, 2, 3} U {3, 4, 5} => {1, 2, 3, 4, 5}

// ... diskriminering

// {a: {1, 2, 3}} U {b: {3, 4, 5}} =>
// {{a: 1}, {a: 2}, {a: 3}, {b: 3}, {b: 4}, {b: 5}}
// discriminator: a, b

// a + b
