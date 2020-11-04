import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

function TechStack(props) {
    return (
        <ul className="tech-stack-list">
            {props.technos.map((t) =>
                <li><FontAwesomeIcon className="blue-color" icon={faTerminal} />{t}</li>
            )}
        </ul>
    )
}

export default TechStack;
