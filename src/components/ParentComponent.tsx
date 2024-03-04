import React, { FC } from 'react'
import ChildComponent from './ChildComponent'


type props = {
    message: string
}

const ParentComponent: FC<props> = ({message}) => {
  return (
    <div>
        <p>
            Hi from parent
        </p>
        <ChildComponent message={message}/>
    </div>
  )
}

export default ParentComponent

