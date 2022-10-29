import { Component } from "react";
import CardContainer from "../card-container/card-container";
import './card-list.css'

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        //console.log(this.props);

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return(
                    <CardContainer monster={monster}  />
                    )

                   
                })}
            </div>
        )
    }
}

export default CardList;
