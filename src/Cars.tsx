import React from "react";
import { CarsDropdown } from "./components/Dropdown";
import { getAllManufacturers, getModels, getEngines } from "./service.mock/service.mock";

export const Cars = () => {
    return (
        <div>
            <h2>Selected your car</h2>
            {/*SELECTED AUTO: manufacturer {manufacturer} | model {model} | engine | {engine}*/}
            <div className="cars-selector">
                <span>Manufacturer</span>
                <CarsDropdown disabled={false} header="Manufacturer" options={[]} onSelect={(id) => {}}></CarsDropdown>
                <span>Model</span>
                <CarsDropdown
                    // disabled={} disable when no manufacturer is selected
                    header="Model"
                    options={[]}
                    onSelect={(id) => {}}
                ></CarsDropdown>
                <span>Engine</span>
                <CarsDropdown
                    // disabled={} disable when no model is selected
                    header="Engine"
                    options={[]}
                    onSelect={(id) => {}}
                ></CarsDropdown>
            </div>
        </div>
    );
};
