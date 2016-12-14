import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislator from './SingleLegislator'
import ShortHeader from './ShortHeader'
import { Accordian, Panel, Button } from 'react-bootstrap'

class AllLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAllLegislators = this.fetchAllLegislators.bind(this)
    this.firstFilterResult = this.firstFilterResult.bind(this)
    // this.nextFilterResult = this.nextFilterResult.bind(this)
    // this.firstGet2014 = this.firstGet2014.bind(this)
    // this.firstGet2015 = this.firstGet2015.bind(this)
    // this.firstGet2016 = this.firstGet2016.bind(this)
    this.nextGet2016 = this.nextGet2016.bind(this)
    this.nextGet2015 = this.nextGet2015.bind(this)
    this.nextGet2014 = this.nextGet2014.bind(this)
    this.set2016 = this.set2016.bind(this)
    this.set2015 = this.set2015.bind(this)
    this.set2014 = this.set2014.bind(this)
    this.lastShowSenators = this.lastShowSenators.bind(this)
    this.lastShowReps = this.lastShowReps.bind(this)
    this.setSearchText = this.setSearchText.bind(this)
    this.firstShowSenators = this.firstShowSenators.bind(this)
    this.firstShowReps = this.firstShowReps.bind(this)
    this.firstShowAll = this.firstShowAll.bind(this)
    // this.secondFilterResult = this.secondFilterResult.bind(this)
    // this.lastGet2016 = this.lastGet2016.bind(this)
    // this.lastGet2015 = this.lastGet2015.bind(this)
    // this.lastGet2014 = this.lastGet2014.bind(this)
    this.mainFilterResult = this.mainFilterResult.bind(this)
    this.state = {
      open: false,
      searchText: '',
      results: [],
      defaultAll: [],
      year2016: true,
      year2015: false,
      year2014: false,
      senators: false,
      house: false,
      showAll: true,
      year2016Active: '2016 (active)',
      year2015Active: '2015',
      year2014Active: '2014',
      allActive: 'show all (active)',
      senatorsActive: 'senators',
      repsActive: 'respresentatives'
    }
  }

  componentDidMount() {
      this.fetchAllLegislators()
      setTimeout(() => this.firstFilterResult(), 0)
  }

  fetchAllLegislators(){
      fetch('/legislators/')
      .then(response => response.json())
      // .then(response => this.setState({defaultAll: response.legislators}))
      //
      // fetch('/legislators/filter?q[year_eq]=2016')
      // .then(response => response.json())
      // .then(response => this.setState({results: response.legislators, legislators: response.legislators}))
      .then((response) => {this.setState({defaultAll: response.legislators})
      setTimeout(() => this.firstFilterResult(), 0)
     })
  }

  setSearchText(e){
    var newText = e.target.value
    this.setState({
      searchText: newText
    })
    setTimeout(() => this.firstFilterResult(), 0)
  }

  mainFilterResult(){
    const searchTerm = this.state.searchText
    var resultsArray = []
    var searchWords = searchTerm.split(' ')
    var upperTesteroni = searchWords.map(function(data){
      return data.charAt().toUpperCase() + data.slice(1)
    })
    var searchText = upperTesteroni.join(' ')
    var defaultArray = this.state.defaultAll
    var newResults = defaultArray.forEach(function(element){
      var fullName = element.first_name + ' ' + element.last_name
      if(fullName.includes(searchText))
      {
        resultsArray.push(element)
      }
    })
    this.setState({
      results: resultsArray
    })
  }

  firstFilterResult(){
    this.mainFilterResult()
    if(this.state.year2014 === true){
      this.nextGet2014()
    }
    else if(this.state.year2015 === true){
      this.nextGet2015()
    }
    else if(this.state.year2016 === true){
      this.nextGet2016()
    }
  }

  // nextFilterResult(){
  //   this.mainFilterResult()
  //     if(this.state.senators === true){
  //       this.lastShowSenators()
  //     }
  //     else if(this.state.house === true){
  //       this.lastShowReps()
  //     }
  //   }

    // secondFilterResult(){
    //   this.mainFilterResult()
    //     if(this.state.year2016 === true){
    //       this.lastGet2016()
    //     }
    //     else if(this.state.year2015 === true){
    //       this.lastGet2015()
    //     }
    //     else if(this.state.year2014 === true){
    //       this.lastGet2014()
    //     }
    //   }

  set2014(){
    this.setState({
      year2014: true,
      year2015: false,
      year2016: false,
      year2014Active: '2014 (active)',
      year2015Active: '2015',
      year2016Active: '2016'
    })
    setTimeout(() => this.firstFilterResult(), 0)
  }

  // firstGet2014(){
  //   var array2014 = []
  //   var newArray2014 = this.state.defaultAll.map(function(data){
  //     if(data.year === 2014){
  //       array2014.push(data)
  //     }
  //   })
  //   this.setState({legislators: array2014})
  //   setTimeout(() => this.nextFilterResult(), 0)
  // }

  nextGet2014(){
    var array2014 = []
    var newArray2014 = this.state.results.map(function(data){
      if(data.year === 2014){
        array2014.push(data)
      }
    })
    this.setState({results: array2014})
    if(this.state.senators === true){
      this.lastShowSenators()
    }
    else if(this.state.house === true){
      this.lastShowReps()
    }
  }

  // lastGet2014(){
  //   var array2014 = []
  //   var newArray2014 = this.state.results.map(function(data){
  //     if(data.year === 2014){
  //       array2014.push(data)
  //     }
  //   })
  //   this.setState({results: array2014})
  // }

  // lastGet2015(){
  //   var array2015 = []
  //   var newArray2015 = this.state.results.map(function(data){
  //     if(data.year === 2015){
  //       array2015.push(data)
  //     }
  //   })
  //   this.setState({results: array2015})
  // }

  // lastGet2016(){
  //   var array2016 = []
  //   var newArray2016 = this.state.results.map(function(data){
  //     if(data.year === 2016){
  //       array2016.push(data)
  //     }
  //   })
  //   this.setState({results: array2016})
  // }

  set2015(){
    this.setState({
      year2014: false,
      year2015: true,
      year2016: false,
      year2014Active: '2014',
      year2015Active: '2015 (active)',
      year2016Active: '2016'
    })
    setTimeout(() => this.firstFilterResult(), 0)
  }

  // firstGet2015(){
  //   var array2015 = []
  //   var newArray2015 = this.state.defaultAll.map(function(data){
  //     if(data.year === 2015){
  //       array2015.push(data)
  //     }
  //   })
  //   this.setState({legislators: array2015})
  //   setTimeout(() => this.nextFilterResult(), 0)
  // }

  nextGet2015(){
    var array2015 = []
    var newArray2015 = this.state.results.map(function(data){
      if(data.year === 2015){
        array2015.push(data)
      }
    })
    this.setState({results: array2015})
    if(this.state.senators === true){
      this.lastShowSenators()
    }
    else if(this.state.house === true){
      this.lastShowReps()
    }
  }

  set2016(){
    this.setState({
      year2014: false,
      year2015: false,
      year2016: true,
      year2014Active: '2014',
      year2015Active: '2015',
      year2016Active: '2016 (active)'
    })
    setTimeout(() => this.firstFilterResult(), 0)
  }
  //
  // firstGet2016(){
  //   var array2016 = []
  //   var newArray2016 = this.state.defaultAll.map(function(data){
  //     if(data.year === 2016){
  //       array2016.push(data)
  //     }
  //   })
  //   this.setState({legislators: array2016})
  //   setTimeout(() => this.nextFilterResult(), 0)
  // }

  nextGet2016(){
    var array2016 = []
    var newArray2016 = this.state.results.map(function(data){
      if(data.year === 2016){
        array2016.push(data)
      }
    })
    this.setState({results: array2016})
    if(this.state.senators === true){
      this.lastShowSenators()
    }
    else if(this.state.house === true){
      this.lastShowReps()
    }
  }

  firstShowSenators(){
    if(this.state.senators === false){
    this.setState({
      senators: true,
      house: false,
      showAll: false,
      senatorsActive: 'senators (active)',
      allActive: 'show all',
      repsActive: 'representatives'
    })
    setTimeout(() => this.firstFilterResult(), 0)
  //   var newSenatorArray = []
  //   var senatorArray = this.state.defaultAll.forEach((data, i) => {
  //     if(data.chamber ==='Senate'){
  //     newSenatorArray.push(data)
  //   }
  // })
  // this.setState({legislators: newSenatorArray})
  // setTimeout(() => this.secondFilterResult(), 0)
  }
  else{
    this.setState({
      senators: false,
      house: false,
      showAll: false,
      senatorsActive: 'senators',
      allActive: 'show all (active)',
      repsActive: 'representatives'
    })
    setTimeout(() => this.firstFilterResult(), 0)
  //   var repArray = this.state.defaultAll
  // this.setState({legislators: repArray})
  // setTimeout(() => this.secondFilterResult(), 0)
  }
}

  firstShowReps(){
    if(this.state.house === false){
    this.setState({
      senators: false,
      house: true,
      showAll: false,
      repsActive: 'representatives (active)',
      allActive: 'show all',
      senatorsActive: 'senators'
    })
    setTimeout(() => this.firstFilterResult(), 0)
  //   var newRepArray = []
  //   var repArray = this.state.defaultAll.forEach((data, i) => {
  //     if(data.chamber ==='House'){
  //     newRepArray.push(data)
  //   }
  // })
  // this.setState({legislators: newRepArray})
  // setTimeout(() => this.secondFilterResult(), 0)
}
else{
  this.setState({
    senators: false,
    house: false,
    showAll: false,
    senatorsActive: 'senators',
    allActive: 'show all',
    repsActive: 'representatives'
  })
  setTimeout(() => this.firstFilterResult(), 0)
  //   var repArray = this.state.defaultAll
  // this.setState({legislators: repArray})
  // setTimeout(() => this.secondFilterResult(), 0)
 }
}

  firstShowAll(){
      this.setState({
        senators: false,
        house: false,
        showAll: true,
        allActive: 'show all (active)',
        senatorsActive: 'senators',
        repsActive: 'representatives'
      })
      setTimeout(() => this.firstFilterResult(), 0)
    //   var repArray = this.state.defaultAll
    // this.setState({legislators: repArray})
    // setTimeout(() => this.secondFilterResult(), 0)
  }

  lastShowSenators(){
    this.setState({
      senators: true,
      house: false,
      showAll: false
    })
    var newSenatorArray = []
    var senatorArray = this.state.results.forEach((data, i) => {
      if(data.chamber ==='Senate'){
      newSenatorArray.push(data)
    }
  })
  this.setState({results: newSenatorArray})
}

  lastShowReps(){
    this.setState({
      senators: false,
      house: true,
      showAll: false
    })
    var newRepArray = []
    var repArray = this.state.results.forEach((data, i) => {
      if(data.chamber ==='House'){
      newRepArray.push(data)
    }
  })
  this.setState({results: newRepArray})
  }

  render() {
    var searchalllegislators = this.state.results.map((data, i) => {
      return <SingleLegislator data={data} key={i} />
    })
    return <div>
      <div className='container-fluid'>
        <ShortHeader />
      </div> <br/>
      <div className="container-fluid legislatorBackground">
      <br/>
        <div className="row">
          <div className="col-sm-3 hiddenSection">
            <ul className='list-unstyled yearsNav text-right'>
              <input type="text" id='legislatorSearch' className="form-control" placeholder="Search Legislator Name" onChange={this.setSearchText} />
              <div className="legText text-center">Filter by Year</div>
                <li className='btn legText yearText' onClick={this.set2016}>{this.state.year2016Active}</li>
                <li className='btn legText yearText' onClick={this.set2015}>{this.state.year2015Active}</li>
                <li className='btn legText yearText' onClick={this.set2014}>{this.state.year2014Active}</li>
                <br/>
              <div className="legText text-center">Filter by Title</div>
                <li className='btn legText yearText' onClick={this.firstShowAll}>{this.state.allActive}</li>
                <li className='btn legText yearText' onClick={this.firstShowSenators}>{this.state.senatorsActive}</li>
                <li className='btn legText yearText' onClick={this.firstShowReps}>{this.state.repsActive}</li>
            </ul>
          </div>
          <div className="col-sm-3 mobileReveal">
            <input type="text" className="form-control" placeholder="Search Legislator Name" onChange={this.setSearchText} /> <br/>
          <Button className='billBtn' onClick={ ()=> this.setState({ open: !this.state.open })}>
            <div className="navItems text-left">filter</div>
          </Button>
          <Panel collapsible expanded={this.state.open}>
          <div className="legText text-left">Filter by Year</div>
          <ul className='list-unstyled yearsNav text-right'>
            <li className='btn legText yearText' onClick={this.set2016}>{this.state.year2016Active}</li>
            <li className='btn legText yearText' onClick={this.set2015}>{this.state.year2015Active}</li>
            <li className='btn legText yearText' onClick={this.set2014}>{this.state.year2014Active}</li>
          </ul>
          <div className="legText text-left">Filter by Title</div>
          <ul className="list-unstyled yearsNav text-right">
          <li className='btn legText yearText' onClick={this.firstShowAll}>{this.state.allActive}</li>
          <li className='btn legText yearText' onClick={this.firstShowSenators}>{this.state.senatorsActive}</li>
          <li className='btn legText yearText' onClick={this.firstShowReps}>{this.state.repsActive}</li>
          </ul>
          </Panel>
          </div>
          <div className="col-sm-9 borderBills whiteBackground">
          <div onClick={this.showLegislator}>
            {searchalllegislators}
          </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default AllLegislators
