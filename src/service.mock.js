import { mockedManufacturers, mockedModels, mockedEngines } from "./service.mock";

export const getAllManufacturers = () => {
    return new Promise(res => {
        setTimeout(() => {
            res(mockedManufacturers);
        }, 1000);
    });
};


export const getModels = manuf => {
    return new Promise(res => {
        setTimeout(() => {
            res(mockedModels);
        }, 1000);
    });
};

export const getEngines = model => {
    return new Promise(res => {
        setTimeout(() => {
            res(mockedEngines);
        })
    })
}