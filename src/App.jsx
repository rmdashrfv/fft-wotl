import './App.css'
import { UNITS, WEAPONS, ARMOR }from './utils'
const { knives, swords } = WEAPONS
const { clothing, armor } = ARMOR
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { faker } from '@faker-js/faker'
// faker
const plains = [
  [1,1,1,0,1,1,1,1,1,1,1,1],
  [1,1,1,0,0,1,1,0,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
]

const Tile = ({ surface }) => {
  const getSurfaceColor = () => {

  }
  
  return(
    <div style={{
      border: '1px solid black',
      height: '48px', width: '48px',
      background: surface === 0 ? 'black' : 'green'
    }}></div>
  )
}

const Stage = () => {
  const w = plains[0].length;
  const h = plains.length;
  return(
    <div style={{display: 'flex', width: `calc(50px * ${w})`, flexWrap: 'wrap'}}>
      {
        plains.map((row) => {
          return row.map((tile) => {
            return(
              <Tile surface={tile} />
            )
          })
        })
      }
    </div>
  )
}

const Equipment = ({ unit }) => {
  const eq = unit.equipment;
  console.log('equip unit change')
  return(
    <div>
      {
        Object.keys(eq)?.map((key) => {
          return(
            <div>
              {key} -- {eq[key] && <span>{eq[key].name}</span>}
            </div>
          )
        })
      }
    </div>
  )
}

const UnitStats = ({ unit, setCurrentUnit }) => {
  if (!unit) return null
  useEffect(() => {

  }, [unit])

  return(
    <div style={{position: 'fixed', top: '15%', left: '33%', zIndex: 1, backgroundColor: '#fff', border: '1px solid brown', height: '400px', width: '80%'}}>
      <button onClick={() => setCurrentUnit(null)}>x</button><br/>
      <img src={unit.imgSrc} height={'auto'} width={'35'} /><br />
      <p>{unit.name} lv. {unit.level} Exp. {unit.exp}</p>
      <p>{unit.job}</p>
      <p>
        HP: {unit.hp}<br />
        MP: {unit.mp}<br />
        CT: -- / --<br />
      </p>
      <hr />
      <h4>EQP.</h4>
      <div style={{border: '1px solid brown'}}>
        <Equipment unit={unit} />
      </div>
    </div>
  )
}

const FormationMenuController = ({ view, unit }) => {
  switch (view) {
    case 'unit_status':
      return <UnitStats unit={unit} />
    default:
      return null
  }
}

// GIL is money in Final Fantasy
function App() {
  const [gil, setGil] = useState(10_000)
  const [forHire, setForHire] = useState(UNITS)
  const [items, setItems] = useState([
    ...swords,
    ...knives,
    ...clothing,
    ...armor
  ])
  const [inventory, setInventory] = useState([])
  // when we buy a unit, we will put them in this array
  const [party, setParty] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentView, setCurrentView] = useState(null)
  const [currentUnit, setCurrentUnit] = useState(null)
  const [viewingMenu, setViewingMenu] = useState(false)

  useEffect(() => { }, [currentUnit])

  const hireUnit = (unit) => {
    if (gil - unit.cost < 0) return;
    setGil(gil - unit.cost)
    let newUnitName = prompt(`What is the ${unit.job}'s name?`)
    if (!newUnitName || newUnitName === '') newUnitName = faker.name.firstName(unit.gender)
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

  const clickUnit = (unit, i) => {
    if (selectedItem) return equipUnit(unit, i)
    setViewingMenu(true)
    setCurrentUnit(party.find(u => u.id === unit.id))
    setCurrentView('unit_status')
  }

  /*
   take a unit and their pos in the party array
   if the pos matches the unit we trying to update
   simple return a new unit obj that reflects the update
   or return an untampered obj
  */
  const equipUnit = (unit, i) => {
    let itemHeld = unit.equipment[selectedItem.type]
    let newParty = party.map((u, idx) => {
      if (idx === i) { // if the unit position is the same
        const curr = {...unit, equipment: {...u.equipment, [selectedItem.type]: selectedItem}}
        setCurrentUnit(curr)
        return curr // the modified unit w/ new equipment
      } else {
        return u; // untampered with unit object
      }
    })
    setSelectedItem(null)
    setParty(newParty)
    let newInv = [
      ...inventory.filter((i) => {
        return i.id !== selectedItem.id;
      })
    ];
    if (itemHeld) newInv.push(itemHeld)
    setInventory(newInv)
  }

  return(<Stage />)
  
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
              <img alt={item.name} src={item.imgSrc} /><br />
              <p>IN STOCK: {item.stock}</p>
              <button onClick={() => { purchaseItem(item) }}>{item.inStock ? `Purchase ${item.cost}` : 'OUT OF STOCK'}</button>
            </div>
          )
        })
      }
      </div>
      <hr />
      <h2>INVENTORY</h2>
      <div style={{display: 'flex', gap: '5px'}}>
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
      }</div>
      <hr />
      <h2>FORMATION</h2>
      {/* render units in the party that have been hired */}
      <div style={{display: 'flex', gap: '5px'}}>
      {
        party.map((member, i) => {
          return(
             <div onClick={() => { clickUnit(member, i) }}>
                <img src={member.imgSrc} height={'auto'} width={'35'} /><br />
                <p>{member.name} lv. {member.level} Exp. {member.exp}</p>
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
      {/* { viewingMenu && <FormationMenuController view={currentView} unit={currentUnit} />} */}
      {/* <FormationMenuController view={currentView} unit={currentUnit} /> */}
      { currentUnit && <UnitStats unit={currentUnit} setCurrentUnit={setCurrentUnit} />}
    </div>
  )
}
// button.onClick()
export default App


