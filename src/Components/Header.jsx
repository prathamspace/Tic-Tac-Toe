import React from 'react'
import log from '../../public/game-logo.png'
export const Header = () => {
  return (
    <header>
        <img src={log} alt="" />
        <h1>Tic-Tae-Toe</h1>
    </header>
  )
}
