import * as React from "react";
import "./../assets/scss/App.scss";
import FamWithProps from "./FamWithNames";

const App = () => {
    return (
        <div className="app">
            <h1>Hello World!</h1>
            <p>Lauren Rose Tsiprin</p>
            <p>Ava Michelle Tsiprin</p>
            <p>Bella Tsiprin</p>
            <p>Ken Tsiprin</p>
            <p>Ilia Kertsman</p>
            <p><FamWithProps famName="Ilyusha" /></p>
            <p>Victoriya Kertsman</p>
            <p>Philip Kertsman</p>
            <img src="https://lh6.googleusercontent.com/-wXMaeltmbKM/AAAAAAAAAAI/AAAAAAAAABs/mPp_CQmfRyQ/photo.jpg"
            height="480"/>
            <img src="https://s3-media4.fl.yelpcdn.com/bphoto/znU03ZDGJzMNGgFD97UF4A/o.jpg" height="480"/>
        </div>
    );
};

export default App;
