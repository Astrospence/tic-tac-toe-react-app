'use client'
import styles from "./page.module.css";
import { useState, useRef } from "react"

export default function Home() {
  // track who's turn it is
  const [ player, setPlayer ] = useState(1)
  // control styles of selected dots
  const selectedClass = useRef({
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
  // store players' selected dots
  const tally = useRef({
    p1: [],
    p2: []
  })

  // possible win scenarios
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
    // keep tally of selected dot
    player === 1 ? tally.current = ({...tally.current, p1: [...tally.current.p1, target]}) : tally.current = ({...tally.current, p2: [...tally.current.p2, target]})
    // update class of selected dot
    switch (target) {
      case 0:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 0: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 0: styles.p2Selected})
        break;
      case 1:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 1: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 1: styles.p2Selected})
        break;
      case 2:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 2: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 2: styles.p2Selected})
        break;
      case 3:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 3: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 3: styles.p2Selected})
        break;
      case 4:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 4: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 4: styles.p2Selected})
        break;
      case 5:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 5: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 5: styles.p2Selected})
        break;
      case 6:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 6: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 6: styles.p2Selected})
        break;
      case 7:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 7: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 7: styles.p2Selected})
        break;
      case 8:
        player === 1 ? selectedClass.current = ({...selectedClass.current, 8: styles.p1Selected}) : selectedClass.current = ({...selectedClass.current, 8: styles.p2Selected})
        break;
      default:
        selectedClass.current = ({
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
    // switch player turn
    player === 1 ? setPlayer(2) : setPlayer(1)
    checkWin(player)
  }

  const newGame = () => {
    selectedClass.current = ({
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
    if (player === 1) {
      for (let i = 0; i < winCon.length; i++) {
        let count = 0
        for (let n = 0; n < tally.current.p1.length; n++) {
          if ((tally.current.p1[n] === winCon[i][0]) || (tally.current.p1[n] === winCon[i][1]) || (tally.current.p1[n] === winCon[i][2])) {
            count++
          }
        }
        if (count > 2) {
          winCon[i].forEach(dot => {
            switch (dot) {
              case 0:
                selectedClass.current = ({...selectedClass.current, 0: styles.p1Winner})
                break;
              case 1:
                selectedClass.current = ({...selectedClass.current, 1: styles.p1Winner})
                break;
              case 2:
                selectedClass.current = ({...selectedClass.current, 2: styles.p1Winner})
                break;
              case 3:
                selectedClass.current = ({...selectedClass.current, 3: styles.p1Winner})
                break;
              case 4:
                selectedClass.current = ({...selectedClass.current, 4: styles.p1Winner})
                break;
              case 5:
                selectedClass.current = ({...selectedClass.current, 5: styles.p1Winner})
                break;
              case 6:
                selectedClass.current = ({...selectedClass.current, 6: styles.p1Winner})
                break;
              case 7:
                selectedClass.current = ({...selectedClass.current, 7: styles.p1Winner})
                break;
              case 8:
                selectedClass.current = ({...selectedClass.current, 8: styles.p1Winner})
                break;
              default:
                null
            }
          })
          break
        }
      }
    } else {
      for (let i = 0; i < winCon.length; i++) {
        let count = 0
        for (let n = 0; n < tally.current.p2.length; n++) {
          if ((tally.current.p2[n] === winCon[i][0]) || (tally.current.p2[n] === winCon[i][1]) || (tally.current.p2[n] === winCon[i][2])) {
            count++
          }
        }
        if (count > 2) {
          winCon[i].forEach(dot => {
            switch (dot) {
              case 0:
                selectedClass.current = ({...selectedClass.current, 0: styles.p2Winner})
                break;
              case 1:
                selectedClass.current = ({...selectedClass.current, 1: styles.p2Winner})
                break;
              case 2:
                selectedClass.current = ({...selectedClass.current, 2: styles.p2Winner})
                break;
              case 3:
                selectedClass.current = ({...selectedClass.current, 3: styles.p2Winner})
                break;
              case 4:
                selectedClass.current = ({...selectedClass.current, 4: styles.p2Winner})
                break;
              case 5:
                selectedClass.current = ({...selectedClass.current, 5: styles.p2Winner})
                break;
              case 6:
                selectedClass.current = ({...selectedClass.current, 6: styles.p2Winner})
                break;
              case 7:
                selectedClass.current = ({...selectedClass.current, 7: styles.p2Winner})
                break;
              case 8:
                selectedClass.current = ({...selectedClass.current, 8: styles.p2Winner})
                break;
              default:
                null
            }
          })
          break
        }
      }
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>TIC TAC TOE</h1>
        <p>{`Player ${player}'s turn!`}</p>
        <div className={styles.game}>
          <div className={styles.gameGrid}>
            <div id='dot0' className={selectedClass.current[0]} onClick={select}></div>
            <div id='dot1' className={selectedClass.current[1]} onClick={select}></div>
            <div id='dot2' className={selectedClass.current[2]} onClick={select}></div>
            <div id='dot3' className={selectedClass.current[3]} onClick={select}></div>
            <div id='dot4' className={selectedClass.current[4]} onClick={select}></div>
            <div id='dot5' className={selectedClass.current[5]} onClick={select}></div>
            <div id='dot6' className={selectedClass.current[6]} onClick={select}></div>
            <div id='dot7' className={selectedClass.current[7]} onClick={select}></div>
            <div id='dot8' className={selectedClass.current[8]} onClick={select}></div>
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
