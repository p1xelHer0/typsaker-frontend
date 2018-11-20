interface State {
  loading: boolean;
  data: Data | null;
}

// {loading}     * {data}

// {true, false} * {data, null} => 

// {true, data},
// {true, null},
// {false, null},
// {false, data},
