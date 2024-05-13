import React, {useState} from 'react'
import './DragDrop.css'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove,SortableContext,verticalListSortingStrategy } from '@dnd-kit/sortable'
import SortableItems from './SortableItems'

function DragDrop() {
  const [languages, setLanguages] = useState([
    'JavaScript',
    'TypeScript',
    'Python',
    'C++',
    'PHP'
  ])
  const handleDragEnd = (event) => {
    console.log('dragEnd')
    const {active , over} = event
    console.log("ACTIVE: " + active.id)
    console.log("OVER: " + over.id)
    if (active.id !== over.id) {
      setLanguages((items)=>{
        const activeIndex = items.indexOf(active.id)
        const overIndex = items.indexOf(over.id)
        console.log(arrayMove(items, activeIndex, overIndex))
        return arrayMove(items, activeIndex, overIndex)
      })
    }
  }

  return (
    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    >
      <div className='nobt'>
        <h3>Les languages de programation</h3>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {languages.map(language => <SortableItems key={language} id={language}/>)}
        
        </SortableContext>
      </div>
    </DndContext>
  )
  
}

export default DragDrop