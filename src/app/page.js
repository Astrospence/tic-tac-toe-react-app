'use client'
import styles from "./page.module.css";
import { useState, useEffect } from "react"

export default function Home() {
  const [ player, setPlayer ] = useState(1)
  const [ selectedClass, setSelectedClass ] = useState({
    0: styles.gameDot,
    1: styles.gameDot,
    2: styles.gameDot,
    3: styles.gameDot,
    4: styles.gameDot,
    5: styles.gameDot,
    6: styles.gameDot,
    7: styles.gameDot,
    8: styles.gameDot
  })
  const [ tally, setTally ] = useState({
    p1: [],
    p2: []
  })
  const [ winner, setWinner ] = useState(0)

  const winCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const select = (e) => {
    e.preventDefault()
    const target = parseInt(e.target.id.slice(e.target.id.length - 1))
    player === 1 ? setTally(tally => ({...tally, p1: [...tally.p1, target]})) : setTally(tally => ({...tally, p2: [...tally.p2, target]}))
    switch (target) {
      case 0:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 0: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 0: styles.p2Selected}))
        break;
      case 1:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 1: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 1: styles.p2Selected}))
        break;
      case 2:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 2: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 2: styles.p2Selected}))
        break;
      case 3:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 3: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 3: styles.p2Selected}))
        break;
      case 4:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 4: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 4: styles.p2Selected}))
        break;
      case 5:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 5: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 5: styles.p2Selected}))
        break;
      case 6:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 6: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 6: styles.p2Selected}))
        break;
      case 7:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 7: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 7: styles.p2Selected}))
        break;
      case 8:
        player === 1 ? setSelectedClass(selectedClass => ({...selectedClass, 8: styles.p1Selected})) : setSelectedClass(selectedClass => ({...selectedClass, 8: styles.p2Selected}))
        break;
      default:
        setSelectedClass({
          0: styles.gameDot,
          1: styles.gameDot,
          2: styles.gameDot,
          3: styles.gameDot,
          4: styles.gameDot,
          5: styles.gameDot,
          6: styles.gameDot,
          7: styles.gameDot,
          8: styles.gameDot
        })
    }
    player === 1 ? setPlayer(2) : setPlayer(1)
  }

  const newGame = () => {
    setSelectedClass({
          0: styles.gameDot,
          1: styles.gameDot,
          2: styles.gameDot,
          3: styles.gameDot,
          4: styles.gameDot,
          5: styles.gameDot,
          6: styles.gameDot,
          7: styles.gameDot,
          8: styles.gameDot
        })
  }

  const checkWin = (player) => {
    let p1win = false
    let p2win = false
    for (let i = 0; i < winCon.length; i++) {
      let count = 0
      for (let n = 0; n < tally.p1.length; n++) {
        if ((tally.p1[n] === winCon[i][0]) || (tally.p1[n] === winCon[i][1]) || (tally.p1[n] === winCon[i][2])) {
          count++
        }
      }
      if (count > 2) {
        p1win = true
        break
      }
    }
    for (let i = 0; i < winCon.length; i++) {
      let count = 0
      for (let n = 0; n < tally.p2.length; n++) {
        if ((tally.p2[n] === winCon[i][0]) || (tally.p2[n] === winCon[i][1]) || (tally.p2[n] === winCon[i][2])) {
          count++
        }
      }
      if (count > 2) {
        p2win = true
        break
      }
    }
    if (p1win) {
      console.log('p1 wins!')
    } else if (p2win) {
      console.log('p2 wins!')
    }
  }

  checkWin(player)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>TIC TAC TOE</h1>
        <p>{`Player ${player}'s turn!`}</p>
        <div className={styles.game}>
          <div className={styles.gameGrid}>
            <div id='dot0' className={selectedClass[0]} onClick={select}></div>
            <div id='dot1' className={selectedClass[1]} onClick={select}></div>
            <div id='dot2' className={selectedClass[2]} onClick={select}></div>
            <div id='dot3' className={selectedClass[3]} onClick={select}></div>
            <div id='dot4' className={selectedClass[4]} onClick={select}></div>
            <div id='dot5' className={selectedClass[5]} onClick={select}></div>
            <div id='dot6' className={selectedClass[6]} onClick={select}></div>
            <div id='dot7' className={selectedClass[7]} onClick={select}></div>
            <div id='dot8' className={selectedClass[8]} onClick={select}></div>
          </div>
        </div>
        <div className={styles.scoreBoard}>
          <h2>SCORE</h2>
          <div className={styles.scoreSection}>
            <div className={styles.score}>
              <p>Player 1</p>
              <p>0</p>
            </div>
            <div className={styles.score}>
              <p>Player 2</p>
              <p>0</p>
            </div>
          </div>
          <button className={styles.reset} onClick={newGame}>New Game</button>
        </div>
      </main>
    </div>
  );
}
