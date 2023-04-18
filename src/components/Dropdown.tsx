import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { SelectCallback } from "react-bootstrap/esm/helpers";

export type DropdownOption = {
    id: string;
    name: string;
};

type CarsDropdownProps = {
    disabled: boolean;
    header: string;
    options: DropdownOption[];
    onSelect: SelectCallback;
};

export const CarsDropdown: React.FC<CarsDropdownProps> = ({ disabled, header, options, onSelect }) => {
    return (
        <div>
            <Dropdown onSelect={onSelect}>
                <Dropdown.Toggle disabled={disabled}>Select {header}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {options.map((option) => (
                        <Dropdown.Item key={option.id} eventKey={option.id}>
                            {option.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
