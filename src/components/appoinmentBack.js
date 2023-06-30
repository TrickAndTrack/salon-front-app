import axios from 'axios'

const APPOINMENT_REST_API_URL = 'http://localhost:8082/appoinment';

class appoinmentBack {

    getappoinment(){
        return axios.get(APPOINMENT_REST_API_URL);
    }
}

export default new appoinmentBack();