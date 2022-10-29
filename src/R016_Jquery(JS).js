import React, {Component} from "react";

class R016_Jquery extends Component{
    input_alert = (e) => {
        let input_val = document.getElementById("inputId").value;
        alert(input_val);
    }

    render(){
        return (
            <div>
                <h2>[THIS IS Jqery(js)</h2>
                <input id="inputId" name="inputName"/>
                <button id="buttonId" onClick={e => this.input_alert(e)}>Jquery(js) Button</button>
            </div>
        )
    }
}

export default R016_Jquery;