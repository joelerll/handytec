import axios from "axios";

import { URL } from "../constants";
import ENDPOINTS from "./endpoints";

export default {
    UsersFetch: {
        Get: () => {
            return new Promise((resolve, reject) => {
                axios.get(`${URL}/${ENDPOINTS.USERS.GET}`).then(resp => {
                    resolve(resp.data || {})
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
    RoomFetch: {
        Get: () => {
            return new Promise((resolve, reject) => {
                axios.get(`${URL}/${ENDPOINTS.ROOMS.GET}`).then(resp => {
                    resolve(resp.data || {})
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
};