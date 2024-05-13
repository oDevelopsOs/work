import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function SortableItems(props) {

    const {
        attributes, 
        listeners, 
        setNodeRef,
        transform,
        transition
    } = useSortable({id:props.id})
    const style = {
        transform: CSS.Transform.toString(transform),
    }

  return (
    <div className='mainCard' ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <div body className='card'> {props.id} </div>
    </div>
  )
}

export default SortableItems