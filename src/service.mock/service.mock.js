import { mockedManufacturers, mockedModels, mockedEngines } from "./data.mock";

export const getAllManufacturers = () => {
    return new Promise(res => {
        setTimeout(() => {
            res(mockedManufacturers);
        }, 1000);
    });
};

export const getModels = manufacturerId => {
    return new Promise(res => {
        setTimeout(() => {
            res(mockedModels[manufacturerId]);
        }, 1000);
    });
};

export const getEngines = modelId => {
    return new Promise(res => {
        setTimeout(() => {
            res(mockedEngines[modelId]);
        }, 1000)
    })
}
