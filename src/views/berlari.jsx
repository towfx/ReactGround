import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
// import Todo from './Todo'

const BerData = (prop) => {
    return (<div>
        <p>{prop.kata}</p>
    </div>)
}

const Kotak = (prop) => {
    return (<div style="border: 1px solid; "></div>)
}



const BerlariComponent = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    const bicara = "berulang bicara, sedutan raksa.";

    const numbers = [1, 2, 3, 4, 5];

    const ListItems = numbers.map((number) =>
        <li>{number}</li>
    );

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <BerData kata="Maya"></BerData>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Alert
          </CardTitle>
                <CardBody className="">
                    Pertama kata {bicara}

                    <ul>
                        {ListItems}
                    </ul>

                    <ul>
                        {numbers.map((number) => <li>{number}</li>)}
                    </ul>

                    <button onClick={() => setCount(count + 1)}>
                        Click me
      </button>

      Klicked: {count}

                </CardBody>
            </Card>

            {/*   <Todo/> */}
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default BerlariComponent;
