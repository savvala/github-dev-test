import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class Result extends React.Component {
  state = {
    user: '',
    query: '',
    sortBy: 'date',
    repos: []
  }

  handleSort = (e) => {
    const [sortBy] = e.target;
    this.setState({ sortBy }, () => this.sortFilter());
  }

  sortFilter = () => {
    const { sortBy } = this.state;
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ user: value },
      () => this.getResults() );
  }

  handleSearch = (e) => {
    this.setState({ user: e.target.value });
  }

  componentDidMount() {
    console.log('inside did mount');
    // this.getResults();
  }

  getResults = () =>  {
    console.log('inside will mount');
    Axios
      .get(`https://api.github.com/users/${this.state.user}/repos`)
      .then(res => {
        console.log(res);
        this.setState({ repos: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <main>
        <SearchBar handleSearch={this.handleChange}/>
        <header className="row">
          <h1>Repositories</h1>
        </header>
        <div>
          {this.state.user && this.state.repos.map((repo, i) => {
            return(
              <div key={i} className="row">
                <div className="col-md-8">
                  <div>
                    {repo.name}
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
