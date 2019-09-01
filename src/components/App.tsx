import * as React from "react";
import "./../assets/scss/App.scss";
import family from "./family.json";
import FamWithProps from "./FamWithNames";

const App = () => {
    return (
        <div className="app">
            <h1>Hello World!</h1>
            <p>{family.sister}</p>
            <p>{family.brother}</p>
            <div>
                <ol>
                    <p>- {family.neiceone}</p>
                    <p>- {family.neicetwo}</p>
                </ol>
            </div>
            <p>{family.dad}</p>
            <p><FamWithProps famName={family.dad} /></p>
            <p>{family.mom}</p>
            <p>{family.me}</p>
            <p>{family.friend}</p>
            <img src={family.sisterphoto} height="480"/>
            <img src={family.brotherphoto} width="480"/>
        </div>
    );
};

export default App;
