import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
      console.log('message mounted')
    
      return () => {
        console.log('message unmounted')
      }
    }, [])
    
    return (
        <>
            <h6 className="mt-4 badge bg-danger">User exists!</h6>
        </>
    )
}
