import { useState } from "react"
import horse from "./horse"
import { Horses } from "./Horses"
import './RaceTracks.css'

export const RaceTracks = () => {
    const [isStarted, setIsStarted] = useState(false);

    const horses = [
        new horse(1, 'Black', 'src/components/pictures/black-horse.png'),
        new horse(2, 'Brown', 'src/components/pictures/brown-horse.png'),
        new horse(3, 'Red', 'src/components/pictures/red-horse.png')
    ]

    if(isStarted) {alert('start'), console.log("start")}

    return (            
        <>
            <section id='tracks'>
                {horses.map((horse) => (<Horses key={horse.id} name={horse.name} urlPicture={horse.urlPicture}/>))}
            </section>
            <section id='containerStartButton'>
                <button id='startButton' onClick={() => setIsStarted(true)}>Start</button>
            </section>
        </>
    );
}