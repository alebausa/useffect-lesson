import React, { useState, useEffect } from 'react'

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [counter, setCounter] = useState(1);

  // componentDidMount() => Efecto después del primer render
  useEffect(() => {
    console.log('Después del primer render')
    const intervalID = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000)
    return () => { // componentWillUnmount() => Clean up function justo antes de desmontar el componente
      console.log('Unmounting');
      clearInterval(intervalID);
      document.title = `Seconds: ${timer}`
      console.log('Timer after cleanup function: ', timer)
    }
  }, [])

  // componentDidUpdate() => Justo después de actualizar la variable que hay en el array de dependencias
  useEffect(() => {
    document.title = `MoviesApp | Genres`
  }, [timer])

  // componentDidUpdate() => Justo después de actualizar la variable que hay en el array de dependenc
  useEffect(() => {
    console.log('Updating component');
  }, [counter]) // componentDidUpdate()

  const handleIncrease = () => {
    setCounter(value => value + 1)
  }

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
