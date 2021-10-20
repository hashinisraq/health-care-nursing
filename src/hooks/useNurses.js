import { useEffect, useState } from "react"

const useNurses = () => {
    const [nurses, setNurses] = useState([]);
    useEffect(() => {
        fetch("./fakedb.json")
            .then(res => res.json())
            .then(data => setNurses(data))
    }, [])

    return [nurses, setNurses];
}

export default useNurses;