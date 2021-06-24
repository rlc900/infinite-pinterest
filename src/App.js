import {useState, useRef} from 'react'
import data from './pins.json'
import './App.css';
import PinCard from './components/PinCard.js'
import { Header, Loader } from 'semantic-ui-react'


function App() {
  
const [pins, setPins] = useState(data)
const [loading, setLoading] = useState(false)
const page = useRef(null)

 
  let handleScroll = () => {
    if (page.current.scrollTop + page.current.clientHeight >= page.current.scrollHeight) {
      setLoading(true)
      setTimeout(getData, 50)
    }
  }

  const getData = () => {
    setLoading(false)
    setPins((prevPins) => {
      return [...prevPins, ...data]
    })
  }

  const allPins = pins.map((pin, index) => {
      return <PinCard key={`${pin.id}-${index}`} pin={pin} index={index} images={pin.images}/>
  })

  return (
    <div className="App" ref={page} onScroll={handleScroll}>
      <Header className='header' as='h1'>Infinite PinterScroll!</Header>
       {allPins}
       {loading && 
        <Loader active inline='centered' />}
    </div>
  );
}

export default App;
