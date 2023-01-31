import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Test = () => {
  const [first, setFirst] = useState("")
  const [ok, setOK] = useState(false)
  useEffect(() => {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        // (setFirst(res.data))
      }).catch((err) => {
        console.log(err)
      })
  }, [first])

  console.log(first)
  const handleChange = (e) => {
    setFirst(e.target.value)
    setOK(true)
  }

  return (
    <div>
      <h3>Test </h3>
      <input type="text" value={first} onChange={handleChange} />
      <button onClick={handleChange}>ok</button>
    </div>
  )
}

export default Test