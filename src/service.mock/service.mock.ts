import { mockedManufacturers, mockedModels, mockedEngines } from "./data.mock";

export const getAllManufacturers = (): any => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mockedManufacturers);
        }, 1000);
    });
};

export const getModels = (manufacturerId: any): any => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mockedModels[manufacturerId]);
        }, 1000);
    });
};

export const getEngines = (modelId: any): any => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mockedEngines[modelId]);
        }, 1000);
    });
};
