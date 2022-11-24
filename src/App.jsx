import './App.css'
import { UNITS, WEAPONS } from './utils'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// GIL is money in Final Fantasy
function App() {
  const [gil, setGil] = useState(10_000)
  const [forHire, setForHire] = useState(UNITS)
  const [items, setItems] = useState(WEAPONS.swords)
  const [inventory, setInventory] = useState([])
  // when we buy a unit, we will put them in this array
  const [party, setParty] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const hireUnit = (unit) => {
    if (gil - unit.cost < 0) return;
    setGil(gil - unit.cost)
    let newUnitName = prompt(`What is the ${unit.job}'s name?`)
    // Hellman's
    setParty([...party, {...unit, name: newUnitName, id: uuidv4() }])
  }

  const dismissUnit = (unit) => {
    // Everyone whose ID is NOT the id of the dismissed Unit can stay
    setParty([...party.filter((member) => {return member.id !== unit.id})])
  }

  const purchaseItem = (item) => {
    // 1. check if we have item in stock
    // 2. check if user can afford item
    if (item.stock === 0 || item.cost > gil) return;
    // let gear = items.find((i) => i.name === item.name)
    // gear.stock -= 1
    // let updatedItems = [...items.filter((i) => { return i.name !== item.name}), gear]
    // setItems(updatedItems)
    item.stock -= 1
    if (item.stock <= 0) item.inStock = false
    setGil(gil - item.cost)
    setInventory([...inventory, {...item, id: uuidv4() }])
  }

  const chooseItem = (item) => {
    setSelectedItem(item)
  }

  const equipUnit = (unit) => {
    unit.equipment[selectedItem.type] = selectedItem
    setSelectedItem(null)
    setInventory((prevState) => {
      return [...prevState.filter((i) => {
        return i.id !== selectedItem.id
      })]
    })
    console.log(party)
  }
  
  return(
    <div>
      <h3 style={{textAlign: 'right'}}>{gil} GIL</h3>
      <h2>FOR HIRE</h2>
      <div style={{display: 'flex', gap: '5px'}}>
        {
          forHire.map((unit) => {
            return(
              <div>
                <img src={unit.imgSrc} height={'auto'} width={'35'} /><br />
                <button onClick={() => { hireUnit(unit) }}>HIRE: {unit.cost} Gil</button>
              </div>
            )
          })
        }
      </div>
      <hr />
      <h2>SHOP</h2>
      <div style={{display: 'flex', gap: '5px'}}>
      {
        items.map((item) => {
          return(
            <div style={{opacity: item.inStock ? '1' : '0.5'}}>
              <img alt={item.name} /><br />
              <p>IN STOCK: {item.stock}</p>
              <button onClick={() => { purchaseItem(item) }}>{item.inStock ? `Purchase ${item.cost}` : 'OUT OF STOCK'}</button>
            </div>
          )
        })
      }
      </div>
      <hr />
      <h2>INVENTORY</h2>
      {
        inventory.map((i) => {
          return(
            <div onClick={() => { chooseItem(i) }} style={{border: selectedItem?.id === i.id ? '1px solid firebrick' : '1px solid transparent'}}>
              <p>
                NAME: {i.name}<br />
                ATK: {i.attack}<br />
                DEF: {i.defense}<br />
                MAG: {i.magicPower}<br />
              </p>
            </div>
          )
        })
      }
      <hr />
      <h2>FORMATION</h2>
      {/* render units in the party that have been hired */}
      <div style={{display: 'flex', gap: '5px'}}>
      {
        party.map((member) => {
          return(
             <div onClick={() => { equipUnit(member) }}>
                <img src={member.imgSrc} height={'auto'} width={'35'} /><br />
                <p>{member.name} lv. {member.level}</p>
                <p>{member.id}</p>
                <p>
                  HP: {member.hp}<br />
                  MP: {member.mp}<br />
                  CT: -- / --<br />
                </p>
                <button onClick={() => { dismissUnit(member) }}>DISMISS</button>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
// button.onClick()
export default App


