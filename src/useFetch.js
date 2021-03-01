import { useState, useEffect } from 'react'
// Custom Hook
const useFetch = (url) => {
  // Makes a fetch request  
  // returns data, pending status and error

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const abortCont = new AbortController();
    const fetchData = async() => {
      let data, response

      try {
        response = await fetch(url, {
          mode: 'cors',
          signal: abortCont.signal
      })
        if(!response.ok){
          throw Error('could not fetch data for that resource')
        }
        data =  await response.json()
      } catch (error) {
        if(error.name === 'AbortError'){
          console.log('fetch aborted')
        }else {
          setIsPending(false)
          setError(error.message)
          return
        }
      }
      setError(null)
      setIsPending(false)
      setData(data)
    }
    fetchData()
    // Cleanup function
    return () => {
      // stops fetch on cleanup
      abortCont.abort()
    }
  },[url]);

  return {data, isPending, error}
}

export default useFetch