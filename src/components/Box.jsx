import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import style from '../css/frame.module.css'

export const Box = ({ id, left, top, zIndex, children, onClick }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.NODE,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )
  if (isDragging) {
    return <div ref={drag} />
  }
  return (
    <div
    className={style.frame}
      ref={drag}
      id={id}
      style={{ ...style, left, top, zIndex }}
      data-testid="box"
      onClick={onClick}
    >
      {children}
    </div>
  )
}
