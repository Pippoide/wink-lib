import { Component } from "react";

class Card extends Component {

    render() {
        return (
            <div className="col p-4" style={{minHeight:"300px"}}>
            <a className="card text-black text-decoration-none h-100" target="_blank" href={this.props.link}>
                <img src={this.props.img} className="card-img-top" alt="..."></img>
                <div className="card-body rounded-pill">
                    <h5 className="card-title text-capitalize">{this.props.titolo}</h5>
                    <div className="linea-capo" style={{textOverflow:"ellipsis",overflow:"hidden"}}>
                        {this.props.descrizione}
                    </div>
                </div>
            </a>  
        </div>
        );
    }
}
export default Card