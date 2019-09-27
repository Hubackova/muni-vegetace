
import { useEffect, useRef } from "react"
import Chart from "chart.js"

const useChart = chartOptions => {
    const canvasRef = useRef()
    useEffect(() => {
      const ctx = canvasRef.current.getContext("2d")
      const myChart = new Chart(ctx, chartOptions)
      return () => myChart.destroy()
    }, [chartOptions])
    return canvasRef
  }

  export default useChart