import React, { useEffect, useState } from 'react'
import './Main.css'
function Main() {
  let [play, setPlay] = useState(true)
  let [boxArr, setBoxArr] = useState(['', '', '', '', '', '', '', '', ''])
  let [statement, setStatement] = useState('')
  const [turn, setTurn] = useState('O')
  const [finish, setFinish] = useState(false)
  let [arr, setArr] = useState([])

  let startGame = () => {
    setPlay(false)
  }

  let win = (pos1, pos2, pos3) => {
    if (pos1 != '' && pos2 != '' && pos3 != '') {
      if (pos1 === pos2 && pos2 === pos3) {
        setStatement(`Winner is "${pos1}"`)
        return true
      }
    }
  }

  useEffect(() => {
    if (
      win(boxArr[0], boxArr[1], boxArr[2]) ||
      win(boxArr[3], boxArr[4], boxArr[5]) ||
      win(boxArr[6], boxArr[7], boxArr[8]) ||
      win(boxArr[0], boxArr[3], boxArr[6]) ||
      win(boxArr[1], boxArr[4], boxArr[7]) ||
      win(boxArr[2], boxArr[5], boxArr[8]) ||
      win(boxArr[0], boxArr[4], boxArr[8]) ||
      win(boxArr[2], boxArr[4], boxArr[6])
    ) {
      setTimeout(() => {
        setFinish(true)
      }, 100)
    }
    else if (
      boxArr[0] !== '' &&
      boxArr[1] !== '' &&
      boxArr[2] !== '' &&
      boxArr[3] !== '' &&
      boxArr[4] !== '' &&
      boxArr[5] !== '' &&
      boxArr[6] !== '' &&
      boxArr[7] !== '' &&
      boxArr[8] !== ''

    ) {
      setTimeout(() => {
        setFinish(true)
        setStatement('Match Tie')
      }, 100)
    }
  })

  let handleTurn = (ind) => {
    if (arr.includes(ind)) {
    }
    else {
      const newArr = [...boxArr];
      if (turn === 'O') {
        newArr[ind] = turn;
        setTurn('X')
      }
      else {
        newArr[ind] = turn;
        setTurn('O')
      }
      setBoxArr(newArr)
      arr.push(ind)
    }
  }

  let restartGame = () => {
    setBoxArr(['', '', '', '', '', '', '', '', ''])
    setFinish(false)
    setTurn('O')
    setArr([])
  }



  return (
    <div className='main'>
      <div className="container">
        {
          play ?
            (
              <>
                <button className="play" onClick={() => startGame()}>Play</button>
              </>
            ) : (
              finish ?
                (
                  <>
                    <h1 className='statement'>{statement}</h1>
                    <button className='game' onClick={() => restartGame()}>Restart Game</button>
                  </>
                ) : (
                  <div className="box">
                    {
                      boxArr.map((element, index) => {
                        return (
                          <>
                            <button
                              key={index}
                              onClick={() => { handleTurn(index) }}
                              className="innerBox"
                            >
                              {element}
                            </button>
                          </>
                        )
                      })
                    }
                  </div>
                )
            )
        }
      </div>
    </div>
  )
}

export default Main
