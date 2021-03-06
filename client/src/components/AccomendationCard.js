import React, { Component } from 'react';


//This is single card component for Similar card in AccomendationDetailsPage 
//Children component for AccomendationDetailsSimilarContainer

class AccomendationCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            status: this.props.property.status,
            property_id : this.props.property.property._id,
            price: this.props.property.price,
            capacity: this.props.property.property.capacity,
            address: this.props.property.property.address,
            suburb: this.props.property.property.suburb,
            picture: this.props.property.property.pictures[0],
            acc_id: this.props.property._id,
            rank : this.props.property.property.avgStar,
            availableTime: this.props.property.startDate.slice(0,-14) +" to " + this.props.property.endDate.slice(0,-14),
        }
    }



    render() {
        const href_acc = '/accommodation/' + this.state.property_id + '&' + this.props.property._id
        return (
            <div className="similar_card">
                <li>
                    <div className="accomondation">
                        <a href={href_acc}><img src={require(`../${this.state.picture}`)} alt="" className="accomondation_img"/></a>
                        <div className="acc_brief">
                            <span id="accomondation_capacity">{this.state.capacity > 1 ? this.state.capacity + " persons" : "1 person"},</span>
                            <span id="accomondation_suburb">{this.state.suburb}</span>
                        </div>
                        <div className="acc_name">
                            <a href={href_acc}><span id="accomondation_name">{this.state.address}</span></a>
                        </div>
                        <div className="acc_price">
                            <span id="accomondation_price">Price: ${this.state.price} per night</span>
                        </div>
                        <div className="acc_time">
                            <span id="accomondation_time">Spare: {this.state.availableTime}</span>
                        </div>
                        <div className="acc_rank">
                            <span id="accomondation_rank">Rating: {this.state.rank !== 0 ? this.state.rank.toFixed(1) +  " / 5.0": "Not Marked"}</span>
                            <img src={require("../img/stars.png")} alt='star' className="rank_star"/>  
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}

export default AccomendationCard;