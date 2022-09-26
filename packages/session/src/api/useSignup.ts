import { useState, useEffect } from "react"

type UseSignupResponse = {
  loading: boolean
  error: boolean
  data: any
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

const useSignup = (variables: any): UseSignupResponse => {
  const [submit, setSubmit] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<any>(null)
  const handleRequest = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/session/signup",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(variables),
        }
      )
      const parseData = await response.json()
      setData(parseData)
    } catch (error) {
      console.log(error)
      setError(false)
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
