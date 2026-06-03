import { useEffect, useState } from "react"

export function useLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load and wait for images
    const handleImageLoad = () => {
      setIsLoading(false)
    }

    if (document.readyState === "complete") {
      // If page is already loaded, set loading to false
      setTimeout(() => setIsLoading(false), 800)
    } else {
      // Wait for window load event
      window.addEventListener("load", handleImageLoad)
      return () => window.removeEventListener("load", handleImageLoad)
    }
  }, [])

  return isLoading
}
