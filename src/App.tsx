import React from "react";
import "./App.css";
//<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
//=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
//<<<<<<< HEAD
//>>>>>>> upstream/task-state
//=======
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
//>>>>>>> upstream/task-components

function App(): React.JSX.Element {
    return <div>(
        <Container>
        <div className="App">
            <Row>
                <Col>
                <div style ={ {border: '4px solid red', padding: '4px'}}>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.costacruises.com%2Fports%2Fsantorini.html&psig=AOvVaw0DKp1dO7JaheCn_A-L1wm6&ust=1725753332888000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC63aXCr4gDFQAAAAAdAAAAABAE" alt="Santorini, Greece, I travelled here this summer" />
                </div>
                </Col>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                
                <div style ={ {border: '4px solid red', padding: '4px'}}></div>
            </header>
            <h1> This is my header</h1>
            
            <p>My Top 5 Favorite Movies</p>
            <ol>
                <li> 1917</li>
                <li> Interstellar</li>
                <li> The Green Mile</li>
                <li> Inception</li>
                <li> Taxi Driver</li>
            </ol>
            </Row>
        
         <div style={ {border: '1px solid blue', padding: '4px'} }>
        this will be surrounded by a border and padding.
        <div>
        <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
    </div>
    </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
    
    </Container>
    </div>
}


export default App;
