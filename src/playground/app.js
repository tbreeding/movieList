class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subtitle:"Put your life in the hands of a computer.",
            options: []
        }
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options) this.setState(() => ({options}))
        } catch (e) {
            //Do Nothing
        }  
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    compenentWillUnmount() {
        console.log("Will Unmount!")
    }
    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }
    handleRemoveItem(ind) {
        this.setState((prevState) => (
            { options: prevState.options.filter((val, index) => index != ind)}
        ))
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] } ))
    }
    handleAddOption(newOption) {
        if(!newOption) {
            return "Enter Valid Value";
        } else if(this.state.options.includes(newOption)) {
            return "This option already exists";
        } 
        this.setState((prevState) => (
            { options: [...prevState.options, newOption] }
        ))           
    }
    render() {
        return (
            <div style={{
                borderRadius: "10px",
                backgroundColor: "orange",
                padding: "20px",
                fontFamily: "Sans-Serif"                
            }}>
                <Header 
                    subtitle={this.state.subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll} 
                    handleRemoveItem={this.handleRemoveItem}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}

const Action = (props) => {
    return (
        <div>
            <button style={{
                backgroundColor: "DodgerBlue",
                color: "white",
                borderRadius: "5px",
                border: "none",
                padding: "5px 10px",
                margin: "10px 0",
                cursor: "pointer",
                outline: "none"
            }}
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What Should I Do?
            </button>
        </div>
    )
}
const Option = (props) => {
    const removeClick = (e) => {
        props.handleRemoveItem(e.target.id);
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: "center",
            width: "300px",
            justifyContent: "space-between",
            fontFamily: "Helvetica",
            backgroundColor: "Gold",
            borderRadius: "10px",
            padding: "5px 10px",
            color: "black",
            border: "1px solid DodgerBlue",
            margin: "5px 0"
            }}
        >
            <p style={{margin: "0"}}>{props.option}</p>
            <a 
                id={props.index} 
                onClick={removeClick} 
                style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                X
            </a>
        </div>
    )
}

const Options = (props) => {
    const options = props.options.map((option, ind) => (
        <Option 
            key={ind} 
            option={option} 
            index={ind} 
            handleRemoveItem={props.handleRemoveItem}
        />
    ))
    return (
        <div>
            {options}
            <button 
                style={{
                    backgroundColor: "DodgerBlue",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    padding: "5px 10px",
                    margin: "10px 0",
                    cursor: "pointer",
                    outline: "none"
                }}
                onClick={props.handleRemoveAll}
            >
                Remove All
            </button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const error = this.props.handleAddOption(e.target.elements.newOption.value.trim());

        this.setState(() => ({ error }))

        if (!error) e.target.elements.newOption.value = "";
    }
    render() {
        return (
            <div>
                {this.state.error && <p style={{color: "red", fontWeight: "bold", fontSize: "1.5em"}}>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        style={{
                            borderRadius: "5px",
                            border: "1px solid DodgerBlue",
                            padding: "5px 10px",
                            outline: "none"
                        }}
                        type="text" 
                        name="newOption" 
                        placeholder="Add Option Here"
                    />
                    <button 
                        style={{
                            backgroundColor: "DodgerBlue",
                            color: "white",
                            borderRadius: "5px",
                            border: "none",
                            padding: "5px 10px",
                            margin: "10px 5px",
                            cursor: "pointer",
                            outline: "none"
                        }}
                        type="submit"
                    >
                        Add Option
                    </button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));