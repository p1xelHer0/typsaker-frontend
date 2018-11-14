interface State {
  loading: boolean;
  data: {
    name: string;
    surname: string;
    age: number;
  };
}

class SimpleExample extends React.Component<{}, State> {
  state = {
    loading: false,
    data: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://notareal.url").then(response => {
      this.setState({ loading: false, data: response });
    });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <PresentData data={this.state.data} />
        )}
      </>
    );
  }
}
