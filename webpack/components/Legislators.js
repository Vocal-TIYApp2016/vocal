import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislator from './Legislator'

class Legislators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      legislators: [
        {
        firstName: 'Sally',
        lastName: 'Wieland',
        title: 'Bosswoman',
        photo: 'https://unsplash.it/400?random'
      },
      {
      firstName: 'Kyle',
      lastName: 'Huff',
      title: 'Bossman',
      photo: 'https://unsplash.it/400?random'
    }
    ]
    }
  }

  render() {
    var legislator = this.state.legislators.map((data, i) => {
      return <Legislator data={data} key={i} />
    })
    return <div>
      <div  className="col-sm-3">
        <div className="text-center titleFont">Legislators</div>
          {legislator}
      </div>
    </div>
  }
}

export default Legislators