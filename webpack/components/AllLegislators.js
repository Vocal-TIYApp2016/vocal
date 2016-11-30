import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislator from './SingleLegislator'
import ShortHeader from './ShortHeader'

class AllLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      legislators: [
        {
          firstName: 'Bill',
          lastName: 'Tooty',
          title: 'President',
          photo: null
        },
        {
          firstName: 'Bill',
          lastName: 'Tooty',
          title: 'President',
          photo: null
        },
        {
          firstName: 'Bill',
          lastName: 'Tooty',
          title: 'President',
          photo: null
        },
        {
          firstName: 'Bill',
          lastName: 'Tooty',
          title: 'President',
          photo: null
        },
        {
          firstName: 'Bill',
          lastName: 'Tooty',
          title: 'President',
          photo: null
        },
      ]
    }
  }
  render() {
    var alllegislators = this.state.legislators.map((data, i) => {
      return <SingleLegislator data={data} key={i} />
    })
    return <div>
      <div className='container-fluid'>
        <ShortHeader />
      </div> <br/> <br/>
      <div className="container-fluid legislatorBackground">
        {alllegislators}
      </div>
    </div>
  }
}
export default AllLegislators
