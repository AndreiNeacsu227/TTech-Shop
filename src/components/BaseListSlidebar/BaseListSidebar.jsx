import React, { Component } from 'react'

export default class BaseListSidebar extends Component {
    constructor(){
        super()
        this.state={
            selectedOption :  ""
        }
    }


    onChangeValue(event){
        this.setState({
            selectedOption : event.target.value
        }, () => {
            this.props.handleShowItems(this.state.selectedOption)
        })
        
    }


    render() {
        return (
            <div className="sidebar">Price: <br/>
                <input type="radio" id="nofilter" className="gender" value="nofilter" onChange={(event) => this.onChangeValue(event)} checked={this.state.selectedOption === "nofilter"}/>
                <label htmlFor="nofilter">Fara filtru</label><br/>
                <input type="radio" id="male" className="gender" value="1-100" onChange={(event) => this.onChangeValue(event)} checked={this.state.selectedOption === "1-100"}/>
                <label htmlFor="male">1-1000</label><br/>
                <input type="radio" id="female" className="gender" value="100-200" onChange={(event) => this.onChangeValue(event)} checked={this.state.selectedOption === "100-200"}  />
                <label htmlFor="female">1000-2000</label><br/>
                <input type="radio" id="other" className="gender" value="200-300" onChange={(event) => this.onChangeValue(event)} checked={this.state.selectedOption === "200-300"} />
                <label htmlFor="other">2000-10000</label>
            </div>
        )
    }
}
