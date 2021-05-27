import React from 'react'
import TouchListItem from './TouchListItem'

const TouchList = () => {

  const touches = [
    {
    id: 1,
    title: "Called and talked to Sally",
    date: "2021/06/22",
    status: "todo",
    body: "I talked to her and she said to call back again some other time."
  },
  {
    id: 2,
    title: "Called and talked to Jim",
    date: "2021/06/22",
    status: "done",
    body: "Didn't answer."
  }, {
    id: 3,
    title: "Email Stanely",
    date: "2021/06/22",
    status: "canceled",
    body: "Position has been filled."
  }
]

  const renderTouchListItems = () => {
    return touches.map(touch => {
      return <TouchListItem key={touch.id} touch={touch} />
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