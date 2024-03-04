import { FC } from 'react'


type props = {
    message: string
}

const ChildComponent: FC<props> = ({message}) => {
  return (
    <div>{
        message
        }</div>
  )
}

export default ChildComponent
