import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislator from './Legislator'
import Loading from 'react-loading'

class MobileLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislators = this.updateLegislators.bind(this)
   this.state = {
     legislators: [],
     arrayLength: ''
   }
 }

    componentDidMount() {
       fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
       .then(response => response.json())
       .then(this.updateLegislators)
      //  .then(response => console.log(response))
    }

    updateLegislators(userData) {
     var emptyArray = []
     var namesList = []
     var finalArray = []
     var legArray = userData.user.legislators
     var trash = legArray.map((data, i) => {
        if (namesList.includes(data.full_name)) {
          emptyArray.push(data)
        }
        else {
          namesList.push(data.full_name)
          finalArray.push(data)
        }
    })
        this.setState({
            legislators: finalArray,
            arrayLength: Number(userData.user.legislators.length)
        })
    }

 render() {
    if(this.state.arrayLength != 0) {
        var legislator = this.state.legislators.map((data, i) => {
            return <Legislator data={data} key={i} />
        })
    }
    else {
    return <div className="col-xs-12 columnContainer">
        <div className="profileBox" id="committeeBox">
          <Loading type='bubbles' color='#223843' />
        </div>
    </div>
    }
    return <div className="col-xs-12 columnContainer">
        <div className='profileBox' id="committeeBox">
            {legislator}
        </div>
    </div>
  }
}

export default MobileLegislators
