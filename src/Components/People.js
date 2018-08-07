import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class People extends Component {
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
  componentDidMount(){
    // Load state from local storage cache if available
    const dataCache = JSON.parse(localStorage.getItem('dataCache'));
    if (dataCache){
      this.setState({
        data: dataCache.people.data,
        more: dataCache.people.more,
        next: dataCache.people.next
      });
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
      });
      // Save in localstorage as cache in order to not have to make API call
      // for more if user leaves the page and come back
      localStorage.setItem(
        'dataCache', 
        JSON.stringify({
          people: {data: this.state.data, more: more, next: data.next}
        })
      );
    }
  }
  render() {
    const people = this.state.data.map((elem) => {
      const url = elem.url.substr(elem.url.indexOf("/people/")+1);
      return [
        <Link to={url} key={url}>
          <div className="Content-cards">
            <p className="Content-title">
              {elem.name}
            </p>
            <p className="Content-show-detail">
              click for details...
            </p>
          </div>
        </Link>
      ]
    });
    return (
      <div className="Content">
        <h2>People</h2>
        {people.length ? people : 'Loading...' }
        {this.state.more && <div className="btn" onClick={this.handleGetMore}>More...</div>}
      </div>
    )
  }
}