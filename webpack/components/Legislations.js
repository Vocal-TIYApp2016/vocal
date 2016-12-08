import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislation from './Legislation'

class Legislations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBills: []
    }
  }
    componentDidMount(){
      fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
      .then(response => response.json())
      .then(response => console.log(response))
      // .then(this.updateUser)
    }
  

  render() {
    var bill = this.state.allBills.map((data, i) => {
      return <Legislation data={data} key={i} />
    })
    return <div>
    <div className='hiddenSection'>
      <div  className="col-sm-3 columnContainer">
        <div className="text-center titleFont">Legislation</div>
          <div className='profileBox'>
          {bill}
          </div>
      </div>
      </div>
    </div>
  }
}

export default Legislations
