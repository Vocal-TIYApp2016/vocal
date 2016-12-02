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
    <div className='hiddenSection'>
      <div className="col-sm-3 columnContainer">
        <div className="text-center titleFont">Legislators</div>
         <div className='profileBox'>
          {legislator}
          </div>
        </div>
      </div>
    </div>
  }
}

export default Legislators
