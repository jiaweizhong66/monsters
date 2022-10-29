import { Component } from "react";

class CardContainer extends Component {
    render() {
        const {monster} = this.props;
        const {id, name, email} = monster;
       return(
        <div className="card-container" key={id}>
                        <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
        </div>
       ) 
    }
}

export default CardContainer