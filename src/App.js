// import logo from './logo.svg';
import {useState, useRef} from 'react'
import data from './pins.json'
import './App.css';

function App() {
const [pins, setPins] = useState(data)
const [loading, setLoading] = useState(false)
const page = useRef(null)
  // console.log(data)
 
  let handleScroll = () => {
    // console.log(page)
    // debugger
    console.log(page.current.scrollTop, page.current.clientHeight, page.current.scrollHeight)
    if (page.current.scrollTop + page.current.clientHeight >= page.current.scrollHeight) {
      setLoading(true)
      // console.log('hello')
      setTimeout(getData, 1000)
    }
  }

  console.log(loading)
  const getData = () => {
    
    setLoading(false)
    setPins((prevPins) => {
      return [...prevPins, ...data]
    })
  }

  // change h1 to pinterestCard
  // look into making respsonsive 
  // change loading information 
  const allPins = pins.map((pin, index) => {
      return <h1 
      key={`${pin.id}-${index}`}>{pin.title}
      
      </h1>
  })

  return (
    <div className="App" ref={page} onScroll={handleScroll}>
        {allPins}
        {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
