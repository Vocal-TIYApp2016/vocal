import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorHeader from './LegislatorHeader'
import LegislatorBills from './LegislatorBills'
import LegislatorNewsItems from './LegislatorNewsItems'
import LegislatorCommittees from './LegislatorCommittees'
import MobileLegCommittees from './MobileLegCommittees'
import URL from 'url-parse'

class LegislatorProfile extends React.Component {
    constructor(props) {
      super(props)
      let url = new URL(window.location.href, true)
      console.log(url)
      // this.updateLegislator = this.updateLegislator.bind(this)
      // this.updateCommittees = this.updateCommittees.bind(this)
      this.state = {
        url: url,
        currentLegislatorProfile: undefined
      }
    }

    componentDidMount() {
      fetch('/legislators/' +  this.state.url.query.id)
      .then(response => response.json())
      .then((response) => {
        window.currentLegislatorProfile = response
        this.setState({currentLegislatorProfile: response})
      })
      .then(response => console.log(response))
    }

  render() {
    return <div>
      <div className='container-fluid'>
        <LegislatorHeader profile={this.state.currentLegislatorProfile} />
      </div> <br/> <br/>
      <div className="container-fluid">
        <div className="row">
          <div className="mobileReveal">
            <div className='col-xs-12 noPadding'>
            <Link to='/legislatorprofile/committees' className="noDecoration"><button className='btn btn-block mobileNavbar'>Committees</button></Link>
            </div>
            <div className='col-xs-12 noPadding'>
            <Link to='/legislatorprofile/news' className="noDecoration"><button id='navBorder' className='btn btn-block mobileNavbar'>News Feed</button></Link>
            </div>
            <div className='col-xs-12 noPadding'>
            <Link to='/legislatorprofile/legislation' className="noDecoration"><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
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
