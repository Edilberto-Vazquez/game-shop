import { useState, useEffect } from "react"

const useSignup = (variables) => {
  const [submit, setSubmit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const handleRequest = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/session/signup",
        {
          method: "POST",
          mode: "cors",
          cache: "default",
          headers: {},
          body: JSON.stringify(variables),
        }
      )
      const parseData = await response.json()
      setData(parseData)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setSubmit(false)
      setLoading(false)
    }
  }
  useEffect(() => {
    if (submit) {
      handleRequest()
    }
  }, [variables, submit])

  return { loading, error, data, setSubmit }
}

export default useSignup
