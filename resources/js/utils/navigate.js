import {Inertia} from "@inertiajs/inertia";

export const getCoinsByQueryObj = sortObj => {
    Inertia.visit(`/dev-page?search_name=${sortObj.search}&${sortObj.sort.name}=${sortObj.sort.value}&page=${sortObj.page}&limit=${sortObj.limit}`)
};
