import { useEffect } from "react";
import { Status } from "./constant";
// import dotenv from 'dotenv';
// dotenv.config();
const API_URL = "https://shirikirdc.mtidano-nft.com/api/v1";
export function getData(EndPoint, setData, getLoaded, loaded, setSkeleton) {
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        (async function () {
            const params = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            };
            try {
                if (loaded) {
                    const response = await fetch(`${API_URL}${EndPoint}`, params, { signal });
                    const responseData = await response.json();
                    if (response.status === 200) {
                        setSkeleton(Status.completed)
                        setData(responseData);
                        getLoaded(false)
                    }
                }
            } catch (error) {
                setSkeleton(Status.error)
            }
        })();
        return () => {
            controller.abort();
            getLoaded(false)
        }
    }, [loaded]);
}



//Add all dada in database
export async function postData(EndPoint, body, setError, method = 'POST') {
    try {
        const params = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            },
            body: JSON.stringify(body)
        };
        const response = await fetch(`${API_URL}${EndPoint}`, params);
        return response;
    } catch (error) {
        setError(error.info);
    }
}


export async function postNoCors(EndPoint, body, setError, method = 'POST') {
    try {
        const params = {
            mode: 'no-cors',
            method: method,
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(`${API_URL}${EndPoint}`, params);
        return response;
    } catch (error) {
        setError(error.info);
    }
}

export async function formData(EndPoint, body, method = 'POST') {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var requestOptions = {
            method: method,
            headers: myHeaders,
            body: body,
            redirect: 'follow'
        };
        const response = await fetch(`${API_URL}${EndPoint}`, requestOptions);
        return response;
    } catch (e) {

    }

}

