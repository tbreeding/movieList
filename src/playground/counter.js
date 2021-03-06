
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.count
        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem("count", this.state.count);
        }
    }
    componentDidMount() {
        try {
            let count = localStorage.getItem("count");
            count = parseInt(count, 10);
            if(!isNaN(count)) this.setState(() => ({count}))
        } catch (e) {
            //Do Nothing
        }  
    }
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// console.log("App.js is running!");
// const appRoot = document.getElementById("app");
// let count=0;

// const plusOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0; 
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="plusOne" className="button" onClick={plusOne}>Plus 1</button>
//             <button id="minusOne" className="button" onClick={minusOne}>Minus 1</button>
//             <button id="reset" className="button" onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();