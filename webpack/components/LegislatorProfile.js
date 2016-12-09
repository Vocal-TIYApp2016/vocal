import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorHeader from './LegislatorHeader'
import LegislatorBills from './LegislatorBills'
import LegislatorNewsItems from './LegislatorNewsItems'
import LegislatorCommittees from './LegislatorCommittees'
import MobileLegCommittees from './MobileLegCommittees'

class LegislatorProfile extends React.Component {
    constructor(props) {
      super(props)
      // this.updateLegislator = this.updateLegislator.bind(this)
      // this.updateCommittees = this.updateCommittees.bind(this)
      this.state = {
        currentLegislatorProfile: undefined
      }
    }

    componentDidMount() {
      fetch('/legislators/' +  sessionStorage.getItem('legislator_id'))
      .then(response => response.json())
      .then((response) => {
        window.currentLegislatorProfile = response
        this.setState({currentLegislatorProfile: response})
      })
      // .then(response => console.log(response))
    }

  render() {
    return <div>
      <div className='container-fluid'>
        <LegislatorHeader profile={this.state.currentLegislatorProfile} />
      </div> <br/> <br/>
      <div className="container-fluid">
        <div className="row">
          <div className="mobileReveal">
            <div className='col-xs-4'>
            <Link to='/legislatorprofile/committees'><button className='btn btn-block mobileNavbar'>Committees</button></Link>
            </div>
            <div className='col-xs-4'>
            <Link to='/legislatorprofile/news'><button className='btn btn-block mobileNavbar'>News Feed</button></Link>
            </div>
            <div className='col-xs-4'>
            <Link to='/legislatorprofile/legislation'><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
            </div>
            {this.props.children}
          </div>
          <LegislatorCommittees profile={this.state.currentLegislatorProfile} />
          <LegislatorNewsItems />
          <LegislatorBills profile={this.state.currentLegislatorProfile} />
        </div>
      </div>
    </div>
  }
}
export default LegislatorProfile
