import React, { useEffect } from 'react'
import TouchListItem from './TouchListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTouches } from '../../actions/touches'

const TouchList = ({slug}) => {
  const dispatch = useDispatch()
  // @ts-ignore
  const touches = useSelector(state => state.touches)
  // @ts-ignore
  const lead = useSelector(state => state.lead)
  
  useEffect(() => {
    dispatch(getTouches(slug))
  }, [])

  const renderTouchListItems = () => {
    return touches.map(touch => {
      return <TouchListItem slug={slug} key={touch.id} touch={touch} />
    })
  }


  return(
    <div id="activity-log-accordion">
      <ul>
        {renderTouchListItems()}
      </ul>
    </div>

  )
}

export default TouchList