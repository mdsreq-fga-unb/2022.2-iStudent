import { useEffect, useState } from "react"
import { Teacher } from "../../types/user"
import getAllTeachers from "../services/teachers/getAllTeachers"

const useTeachers = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([])

    useEffect(() => {
        getAllTeachers().then(teachers => setTeachers(teachers))
    },[])

    return {
        teachers,
        setTeachers
    }
}

export default useTeachers