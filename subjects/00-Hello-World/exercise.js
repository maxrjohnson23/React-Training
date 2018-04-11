////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - change the contents of the render function and save the file
// - see the updates automatically in your browser without refreshing!
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

function App() {
    return <div>Hello Chicago!</div>;
}

const contacts = [
    {id: 1, firstName: 'Michael', lastName: 'Jackson'},
    {id: 2, firstName: 'Bruce', lastName: 'Lee'},
    {id: 3, firstName: 'Taylor', lastName: 'Swift'},
]

function ContactList() {
    return (
        <div>
            <h1>Contacts</h1>
            {
                contacts.map((contact, index) => (
                    <div
                        key={index}>{index + 1} {contact.firstName} {contact.lastName}</div>
                ))
            }
        </div>
    )
}

ReactDOM.render(<div><ContactList/><ContactList/></div>, document.getElementById("app"));
