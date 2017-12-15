# github-dev-test

To deploy this app make a clone of the repository then use yarn to install the dependencies and run yarn start to view in the browser.

For this App I created two React components, SearchBar and Result. The SearchBar component reads the text which is being input and updates the state in the result component to filter the repositories via the functions handleSearch and handleChange. In the Result component I used axios to make get requests to gather data from the github api. axios recognizes the user by reading the information which is being passed through this.state.user which is initially set as an empty string and is updated by the onChange feature in the form control of the SearchBar component. The repos array is then updated through this.setState({ repos: res.data }). The data is then rendered by mapping the repositories.

I used webpack to acquire .babelrc for the conversion of javascript.
