import { useState } from "react"
import horse from "./horse"
import { Horses } from "./Horses"

export const RaceTracks = () => {
    const [isStarted, setIsStarted] = useState(false);

    const horses = [
        new horse(1, 'Thunder'),
        new horse(2, 'Tesla'),
        new horse(3, 'Tom'),
    ]

    if(isStarted) {alert('start'), console.log("start")}

    return (            
        <>
            <section id='tracks'>
                {horses.map((horse) => (<Horses key={horse.id} name={horse.name}/>))}
            </section>
            <section id='containerStartButton'>
                <button id='startButton' onClick={() => setIsStarted(true)}>Start</button>
            </section>
        </>
    );
}