import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        const abortController = new AbortController();
        // setting setTimeout is for demo only to see the pending status of get request
        setTimeout(() => {
            fetch(url,{signal: abortController.signal})
                .then(res => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error('could not fetch!');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                }).catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);

        return () => abortController.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;