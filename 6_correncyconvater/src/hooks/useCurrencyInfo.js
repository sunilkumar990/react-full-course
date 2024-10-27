import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [date, setData] = useState({})
    useEffect(() => {
        fatch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(date);
    }, [currency])
    console.log(date);
    return date
}


export default useCurrencyInfo;