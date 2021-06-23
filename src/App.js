import {useState, useRef} from 'react'
import data from './pins.json'
import './App.css';
import PinCard from './components/PinCard.js'
import { Header, Loader} from 'semantic-ui-react'


function App() {
const [pins, setPins] = useState(data)
const [loading, setLoading] = useState(false)
const page = useRef(null)
  // console.log(data)
 
  let handleScroll = () => {
    // console.log(page)
    // debugger
    if (page.current.scrollTop + page.current.clientHeight >= page.current.scrollHeight) {
      setLoading(true)
      setTimeout(getData, 1000)
    }
  }

  // console.log(loading)
  const getData = () => {
    
    setLoading(false)
    setPins((prevPins) => {
      return [...prevPins, ...data]
    })
  }

  // change h1 to pinterestCard ***DONE***
  // look into making respsonsive 
  // change loading information ***DONE***
  const allPins = pins.map((pin, index) => {
      return <PinCard key={`${pin.id}-${index}`} pin={pin} index={index} images={pin.images}/>
  })

  return (
    <div className="App" ref={page} onScroll={handleScroll}>
      <Header as='h1'>Infinite PinterScroll!</Header>
       {allPins}
       {loading && <Loader active inline='centered'/>}
    </div>
  );
}

export default App;
