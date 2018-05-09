class Visible extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
        this.showHide = this.showHide.bind(this);
    }
    showHide() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.showHide}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (
                    <p>Hey, these are the details you can now see!</p>
                )}
            </div>
        )
    }
}
ReactDOM.render(<Visible />, document.getElementById("app"));
// let disp = "none";


// let showHide = () => {
//     disp = disp === "none" ? "block" : "none";
//     renderApp();
// }
// let renderApp = () => {
//     let style = {
//         display: disp
//     }
//     let template = (
//         <div>
//             <h1>Visibility</h1>
//             <button onClick={showHide}>{disp === "none" ? "Show Details" : "Hide Details"}</button>
//             <p style={style}>These are the details</p>
//         </div>
//     )

//     ReactDOM.render(template, appRoot);

// }

// renderApp();