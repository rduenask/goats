import '../styles/ResultPage.css'
var React = require("react");

class ResultPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row center-div preds">
                    <div className="col-12 center-div pred-cat"> Predicted Category: {this.props.result['category']}</div>
                </div>
                <div className="row center-div probs-outer">
                    <div className="col-12 center-div probs-title">
                        Probabilities for each class:
                    </div>
                    <div className="col-12 center-div probs">
                        Lebron: {this.props.result['probs']['lebron']}
                    </div>
                    <div className="col-12 center-div probs">
                        Jordan: {this.props.result['probs']['Jordan']}
                    </div>   
                </div>
            </div >
        );
    }
}

export default ResultPage;
