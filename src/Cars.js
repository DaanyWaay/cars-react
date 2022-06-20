import React, { useState, useEffect } from "react";
import { CarsDropdown } from "./components/Dropdown";
import { getAllManufacturers, getModels, getEngines } from "./service.mock/service.mock";

export const Cars = () => {
    useEffect(() => {
        // get all manufacturers
    }, []);

    return (
        <div>
            <h2>Selected your car</h2>
            SELECTED AUTO: manufacturer {manufacturer} | model {model} | engine {engine}
            <div className="cars-selector">
                <span>Select manufacturer</span>
                <CarsDropdown
                    disabled={false}
                    header="Select"
                    options={[]} // add manufacturerd
                    onSelect={(id) => {
                        // set selected manufacturer
                        // get models for selected manufacturer
                    }}
                ></CarsDropdown>
                <span>Select model</span>
                <CarsDropdown
                    // disabled={} disable when no manufacturer is selected
                    header="Select"
                    options={[]} // add models for selected manufacturer
                    onSelect={(id) => {
                        // set selected model
                        // get engines for selected model
                    }}
                ></CarsDropdown>
                <span>Select engine</span>
                <CarsDropdown
                    // disabled={} disable when no model is selected
                    header="Select"
                    options={[]} // add engines for selected manufacturer
                    onSelect={(id) => {
                        // set selected engine
                    }}
                ></CarsDropdown>
            </div>
        </div>
    );
};
