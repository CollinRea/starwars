import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Films extends Component {
  state = {
    data: [],
    more: true
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data && prevState.data.length === 0) {
      const more = nextProps.data.next ? true : false;
      return {
        data: nextProps.data.results,
        next: nextProps.data.next,
        more: more
      };
    } else {
      return prevState;
    }
  }
  handleGetMore = async () => {
    if (this.props.data.count > this.state.data.length && this.state.next) {
      const resp = await fetch(this.state.next)
      const data = await resp.json()
      const more = data.next ? true : false; 
      this.setState({
        data: [...this.state.data, ...data.results],
        next: data.next,
        more: more
      })
    }
  }
  render() {
    const sortByEpisodeId = (elem1, elem2) => {
      return (elem1.episode_id - elem2.episode_id);
    }
    const films = this.state.data.sort(sortByEpisodeId).map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/films/")+1);
      return [
        <Link to={url} key={url}>
          <div className="Content-cards">
            <p className="Content-title">
              {elem.title}
            </p>
            <p className="Content-show-detail">
              click for details...
            </p>
          </div>
        </Link>
      ]
    });
    return (
      <div>
        <h2>Films</h2>
        {films.length ? films : 'Loading...'}
        {this.state.more && <div className="btn" onClick={this.handleGetMore}>More...</div>}
      </div>
    )
  }
}