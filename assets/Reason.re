type state =
  | NotLoaded
  | Loading
  | Loaded(data)
  | Error;

let showData = (state) => 
    switch (state) {
    | NotLoaded => "🤙";
    | Loading => "🌀";
    | Loaded(data) => "📊 " ++ data;
    | Error => "😾";
  }
