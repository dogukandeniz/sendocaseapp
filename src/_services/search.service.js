
import {axiosClient}  from '../_helpers/axios'

export const searchService = {
    filter
};


function  filter(term){
    return axiosClient.get(`/post/${term}`)
        .then(response => {

            console.log(response.data)
            return response.data;
        });
}