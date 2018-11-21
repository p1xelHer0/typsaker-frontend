interface ServerError {
  discriminator: "Error";
  data: ErrorObject,
}

type State = NotLoaded | Loading | Loaded | ServerError;

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
