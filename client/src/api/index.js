import axios from "axios";

import { URL } from "../constants";
import ENDPOINTS from "./endpoints";

export default {
    UsersFetch: {
        Get: () => {
            return new Promise((resolve, reject) => {
                axios.get(`${URL}/${ENDPOINTS.USERS.GET}`).then(resp => {
                    resolve(resp.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        Create: (body) => {
            return new Promise((resolve, reject) => {
                axios.post(`${URL}/${ENDPOINTS.USERS.CREATE}`, body).then(resp => {
                    resolve(resp.data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
    RoomsFetch: {
        Get: () => {
            return new Promise((resolve, reject) => {
                axios.get(`${URL}/${ENDPOINTS.ROOMS.GET}`).then(resp => {
                    resolve(resp.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        GetOne: (id) => {
            return new Promise((resolve, reject) => {
                axios.get(`${URL}/${ENDPOINTS.ROOMS.GET_ONE(id)}`).then(resp => {
                    resolve(resp.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        Message: (id, message) => {
            return new Promise((resolve, reject) => {
                axios.post(`${URL}/${ENDPOINTS.ROOMS.MESSAGE(id)}`, { message }).then(resp => {
                    resolve(resp.data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
};