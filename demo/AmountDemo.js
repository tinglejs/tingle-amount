/**
 * Amount Component Demo for tingle
 * @author Kuncheng Zhao
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Amount = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleChange(value) {
    console.log(value);
  }

  render() {
    const t = this;
    return (
      <div>
        <Amount min="0" max="8" value="2" onChange={t.handleChange.bind(t)}/>
      </div>
    )
  }
}

module.exports = Demo;
