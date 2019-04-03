import React from 'react'

const HomeView = ({ title, changeHomeTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => changeHomeTitle('home Changed')}>Button</button>
    </div>
  )
}

export default HomeView
