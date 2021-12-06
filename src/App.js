import { useState, useEffect } from 'react'
import Input from './Input'
import Break from './Break'

function App() {
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  const [four, setFour] = useState('')
  const [string, setString] = useState('')
  const [arr, setArr] = useState([])

  const handleChange = (e, id) => {
    const attr = e.target.name
    const val = e.target.value
    if (attr == 'one') {
      console.log(attr, val)
      setOne(val)
      const arrIndex = array.findIndex(ele => ele.id === id)
      console.log('found ele', arrIndex, array)
      const result = [...buildArray]
      result[arrIndex].id = id
      result[arrIndex].buildFor = function (id){return <Input id={id} inputValue={one} inputName='one' handleChange={handleChange} /> }
      console.log(result)
      setBuildArray(result)
    }
    else if (attr == 'two') {
      setTwo(val)
    }
    else if (attr == 'three') {
      setThree(val)
    }
    else if (attr == 'four') {
      setFour(val)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const actualData = ['let', 'length', 'log', 'arr']
    const userData = [one, two, three, four]
    let count = actualData.length
    let a = [], str = ''
    for (let i = 0; i < actualData.length; i++) {
      if (actualData[i] !== (userData)[i]) {
        count--
        a.push(`Expected- ${actualData[i]} instead Recieved- ${(userData)[i]}`)
      }
    }
    str += `Score = ${count}/${actualData.length}`
    setString(str)
    setArr(a)
  }
  const array = [
    { id: 1, buildFor: function (id) { return 'const arr = [10, 20, 30]' } },
    { id: 2, buildFor: function (id) { return <Break /> } },
    { id: 3, buildFor: function (id) { return 'for(' } },
    { id: 4, buildFor: function (id) { return <Input id={id} inputValue={one} inputName='one' handleChange={handleChange} /> } },
    { id: 5, buildFor: function (id) { return 'i=0; i<arr.' } },
    { id: 6, buildFor: function (id) { return <Input id={id} inputValue={two} inputName='two' handleChange={handleChange} /> } },
    { id: 7, buildFor: function (id) { return 'i++) {' } }
  ]

  const [buildArray, setBuildArray] = useState(array)
  const [count, setCount] = useState(0)

  const handleShowMore = () => {
    if (count < array.length) {
      setCount(count + 1)
    }
  }

  return (
    <div>
      <h1>Code Builder</h1>
      <form onSubmit={handleSubmit}>
        {
          buildArray.map((ele, i) => {
            return <code key={i} index={ele.id}>{ele.buildFor(ele.id)}</code>
          })
        }
        <br /><input type='submit' />
      </form>

      {arr.length > 0 && <ul>{
        arr.map((ele, i) => {
          return <li key={i}>{ele}</li>
        })
      }</ul>}
      <h3>{string}</h3>
    </div>
  );
}

export default App;
