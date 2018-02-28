import axios from "axios";

export function searchBtn(value) {

    return {
        type: "SEARCH_BTN",
        payload: axios.get(`/search/${value}`)
                    .then(res => res.data)
    }
}