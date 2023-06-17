import { useState } from "react"

function UseCustomHook(data) {
    const [value, setvalue] = useState(data)
    const updatedata = (val) => {
        setvalue(val)
    }
  return [value, updatedata]
}

export default UseCustomHook