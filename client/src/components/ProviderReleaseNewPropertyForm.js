import React, { Component } from 'react';

class ProviderReleaseNewPropertyForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            dropDownState : false,
        }
        this.handleDropDownButton = this.handleDropDownButton.bind(this);
        this.renderReleaseForm = this.renderReleaseForm.bind(this);
    }

    handleDropDownButton(){
        this.setState({
            dropDownState : !this.state.dropDownState
        })
    }

    renderReleaseForm(){
        if(this.state.dropDownState === true){
            return (
                <form action="/" method="post" id="property_input_form" >
                    <div className="input_group">
                        <label className="property_name">Property Name:</label>
                        <input type="text" className="property_name_input" name="propertyname" required/>
                    </div>
                    <div className="input_group">
                        <label className="property_address">Address:</label>
                        <input type="text" className="property_address_input" name="address" required/>
                    </div>
                    <div className="input_group">
                        <label className="property_surburb">Surburb:</label>
                        <input type="text" className="property_suburb_input" name="surburb" required/>
                    </div>
                    <div className="input_group">
                        <label className="property_postcode">Postcode:</label>
                        <input type="text" className="property_postcode_input" name="postcode" required/>
                    </div>
                    <div className="input_group">
                        <label className="property_capacity">Capacity:</label>
                        <select name="capacity" className="property_capacity_button">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    <div className="property_submit">
                        <button type="submit" className="add_button">Submit</button>
                    </div>
                </form>
            )
        }
    }

    render() {
        console.log(this.state.dropDownState)
        return (
            <div className="release_property">
                <div className="release_property_button">
                    <input type="button" value="Release New Property" className="add_button" onClick={this.handleDropDownButton}/>
                </div>
                
                {this.renderReleaseForm()}
            </div>
        )
    }
}

export default ProviderReleaseNewPropertyForm;