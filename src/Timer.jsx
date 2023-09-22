import { useTimer } from "./useTimer"
import styles from "./Timer.module.css"
import { useEffect, useState } from "react"

export function Timer() {

    const {
        timeElapsedMs,
        timeMissingMs,
        timeOverdueMs,
        timeMs,
        timeElapsedParts,
        timeMissingParts,
        timeOverdueParts,
        timeParts,
        running,

        setTimer,
        startTimer,
        resetTimer,
        pauseTimer
    } = useTimer()

    useEffect(() => {
        if (timeMissingMs < 100 && timeOverdueMs < 30 && running) {
            const somAlerta = new Audio('./Galo.mp3')
            somAlerta.play()
        }
    }, [timeMissingMs])

    function mudarTempo(min) {
        return setTimer({ minutes: min })
    }


    return (
        <main>
            <div>
                <h1>egg timer</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.timeInfo}>
                    <div className={styles.timeOptionsTitle}><p>clique no ovo para escolher o ponto:</p></div>
                    <div className={styles.timeOptions}>
                        <div className={styles.itemTimeOptions}>
                            <button className={styles.egg1} onClick={() => mudarTempo(4)}></button>
                            <p className={styles.eggType}>ovo quente</p>
                        </div>
                        <div className={styles.itemTimeOptions}>
                            <button className={styles.egg2} onClick={() => mudarTempo(6)}></button>
                            <p className={styles.eggType}>ovo mollet</p>
                        </div>
                        <div className={styles.itemTimeOptions}>
                            <button className={styles.egg3} onClick={() => mudarTempo(10)}></button>
                            <p className={styles.eggType}>gema dura</p>
                        </div>
                    </div>
                </div>
                <div className={styles.clock}>
                    <div className={styles.gema}>
                        {timeOverdueMs > 0 ?
                            <p className={styles.timerRed}>{String(timeOverdueParts.minutes).padStart(2, "0")}:{String(timeOverdueParts.seconds).padStart(2, "0")}</p>
                            :
                            <p className={styles.timer}>{String(timeMissingParts.minutes).padStart(2, "0")}:{String(timeMissingParts.seconds).padStart(2, "0")} </p>
                        }
                        <div className={styles.buttons}>
                            <button className={styles.playpause} onClick={running ? pauseTimer : startTimer} ></button>
                            <button className={styles.stop} onClick={resetTimer}></button></div>
                    </div>
                </div>
            </div>
        </main>
    )
}