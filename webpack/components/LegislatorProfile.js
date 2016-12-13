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
      this.state = {
        url: url,
        currentLegislatorProfile: undefined,
        committees: '',
        news: '',
        legislation: '',
      }
    }

    componentDidMount() {
      fetch('/legislators/' +  this.state.url.query.id)
      .then(response => response.json())
      .then((response) => {
        window.currentLegislatorProfile = response
        this.setState({currentLegislatorProfile: response})
      })

      this.setState({
        committees: '/legislatorprofile/committees?id=' + this.state.url.query.id,
        news: '/legislatorprofile/news?id=' + this.state.url.query.id,
        legislation: '/legislatorprofile/legislation?id=' + this.state.url.query.id,
      })
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
                  <Link to={this.state.committees} className="noDecoration"><button className='btn btn-block mobileNavbar'>Committees</button></Link>
                  </div>
                  <div className='col-xs-12 noPadding'>
                  <Link to={this.state.news} className="noDecoration"><button id='navBorder' className='btn btn-block mobileNavbar'>News Feed</button></Link>
                  </div>
                  <div className='col-xs-12 noPadding'>
                  <Link to={this.state.legislation} className="noDecoration"><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
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
