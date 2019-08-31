import * as React from "react";
// import { hot } from "react-hot-loader";
import Fam from "./Fam";
import FamWithProps from "./FamWithNames";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

// Attempted to refactor class to functional component but web page appears blank afterwards (for some reason)
// const App = () => {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <p>Lauren Rose Tsiprin</p>
//                 <p>Ava Michelle Tsiprin</p>
//                 <p>Bella Tsiprin</p>
//                 <audio ref="audio_tag" src="src\assets\audio\Relocate.flac" controls autoPlay/>
//                 <p>Ken Tsiprin</p>
//                 <p>Ilia Kertsman</p>
//                 <p><FamWithProps famName="Ilyusha" /></p>
//                 <p>Victoriya Kertsman</p>
//                 <p>Philip Kertsman</p>
//                 <img src="https://lh6.googleusercontent.com/-wXMaeltmbKM/AAAAAAAAAAI/AAAAAAAAABs/
// mPp_CQmfRyQ/photo.jpg" height="480"/>
//                 <img src="https://s3-media4.fl.yelpcdn.com/bphoto/znU03ZDGJzMNGgFD97UF4A/o.jpg" height="480"/>
//             </div>
//         );
// };

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

// class App extends React.Component<{}, undefined> {
//     public render() {
//         return (
//             <div className="app">
//                 <h1>Hello World!</h1>
//                 <p>Lauren Rose Tsiprin</p>
//                 <p>Ava Michelle Tsiprin</p>
//                 <p>Bella Tsiprin</p>
//                 <audio ref="audio_tag" src="src\assets\audio\Relocate.mp3" controls autoPlay/>
//                 <p>Ken Tsiprin</p>
//                 <p>Ilia Kertsman</p>
//                 <p><FamWithProps famName="Ilyusha" /></p>
//                 <p>Victoriya Kertsman</p>
//                 <p>Philip Kertsman</p>
//                 <img src="https://lh6.googleusercontent.com/-wXMaeltmbKM/AAAAAAAAAAI/AAAAAAAAABs/
// mPp_CQmfRyQ/photo.jpg"
//                 height="480"/>
//                 <img src="https://s3-media4.fl.yelpcdn.com/bphoto/znU03ZDGJzMNGgFD97UF4A/o.jpg" height="480"/>
//             </div>
//         );
//     }
// }

// declare let module: object;

export default App;
