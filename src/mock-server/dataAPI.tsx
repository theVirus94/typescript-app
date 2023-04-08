import axios, { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import data from '../MOCK_DATA.json'


// Creates the AxiosInstance
export const dataAPI: AxiosInstance = axios.create()

// Uses it to form the Mock Adapter
const mock = new AxiosMockAdapter(dataAPI, {delayResponse: 0});

mock.onGet("http://localhost:3000/mock").reply(200, data);
