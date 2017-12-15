import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class Result extends React.Component {
  state = {
    user: '',
    query: '',
    repos: []
  }
  handleChange = ({ target: { value }}) => {
    this.setState({ user: value },
      () => this.getResults() );
  }

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  componentDidMount() {
    console.log('inside did mount');
    this.getResults();
  }

  getResults = () =>  {
    console.log('inside will mount');
    Axios
      .get(`https://api.github.com/users/${this.state.user.current_user_url}`)
      .then(res => this.setState({ repos: res.data.current_user_repositories_url }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.user);
    return(
      <main>
        <SearchBar handleSearch={this.handleSearch}/>
        <header className="row">
          <h1>Repositories</h1>
        </header>
        <div>
          {.map((repo, i) => {
            return(
              <div key={i} className="row">
                <div className="col-md-8">
                  <div>
                    {this.state.user.current_user_repositories_url}
                  </div>
                </div>
              </div>
            );
          }
          )
          }
        </div>
      </main>
    );
  }
}

export default Result;
