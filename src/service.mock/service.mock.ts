import { Engine, Manufacturer, Model } from "../types";
import { mockedManufacturers, mockedModels, mockedEngines } from "./data.mock";

export const getAllManufacturers = (): Promise<Manufacturer[]> => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mockedManufacturers);
        }, 1000);
    });
};

export const getModels = (manufacturerId: any): Promise<Model[]> => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mockedModels[manufacturerId]);
        }, 1000);
    });
};

export const getEngines = (modelId: any): Promise<Engine[]> => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mockedEngines[modelId]);
        }, 1000);
    });
};
