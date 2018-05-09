console.log("App.js is running!");
const appRoot = document.getElementById("app");
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
    listOptions() {
        return this.options.map((option, ind) => <li key={ind}>{option}</li>)
    }
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
}
const onMakeDecision = () => {
    if(app.options.length > 0) {
    let rand = Math.floor(Math.random() * app.options.length);
    alert(app.options[rand])
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

let renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? `Here are your options` : `No Options`}</p>
            <button disabled={(app.options.length > 0) ? false : true} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.listOptions()}
            </ol>            
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Input Something" name="option" />
                <button>Add Option</button>        
            </form>            
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderApp();