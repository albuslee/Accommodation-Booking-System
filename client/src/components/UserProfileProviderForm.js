import React, { Component } from 'react';
import UserProfileProviderSingle from '../components/UserProfileProviderSingle'

class UserProfileProviderForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            providerHistory : null,
        }
        this.renderProviderMultipleRecords = this.renderProviderMultipleRecords.bind(this);
    }

    componentWillMount(){
        fetch(`api/history/provider/${localStorage.getItem('uid')}`)
        .then(response => response.json())
        .then(res => {
            this.setState({
                providerHistory : res
            })
        })
        .catch((err) => {console.log(err)})
    }

    renderProviderMultipleRecords(){
        if(this.state.providerHistory !== null){
            console.log(this.state.providerHistory)
            return this.state.providerHistory.map((singleRecord, index)=> (<UserProfileProviderSingle
                key={index} suburb={singleRecord.property.suburb} 
                address={singleRecord.property.address} startTime={singleRecord.startDate.slice(0,-14)}
                endTime={singleRecord.endDate.slice(0,-14)} postcode={singleRecord.property.postcode}
                
           />))
        }
    }


    render () {

        return (
            <div>
                <div className="provider_history">
                    <div className="word_history">
                        <h3>Owned Accomondation:</h3>
                    </div>
                    <table className="provider_table zebra">
                        <tbody>
                            <tr className="tablehead">
                                <td width="20%">Suburb</td>
                                <td width="20%">Address</td>
                                <td width="15%">StartTime</td>
                                <td width="15%">EndTime</td>
                                <td width="15%">Ad Value</td>
                                <td width="15%">Advertisement</td>
                            </tr>
                            {this.renderProviderMultipleRecords()}
                        </tbody>
                    </table>
                    <div className="button_part">
                        <a href="ReleaseInformation.html" className="add_button">Release New Property</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileProviderForm
