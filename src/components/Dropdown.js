import Dropdown from "react-bootstrap/Dropdown";
import { PropTypes } from "prop-types";

import React from "react";

export const CarsDropdown = ({ disabled, header, options, onSelect }) => {
    return (
        <div>
            <Dropdown onSelect={onSelect}>
                <Dropdown.Toggle disabled={disabled}>Select {header}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {options.map(option => (
                        <Dropdown.Item key={options.id} eventKey={option.id}>
                            {option.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

CarsDropdown.propTypes = {
    header: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ).isRequired,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
};
