import { useState } from "react";
import horse from "./horseClass";
import { Horse } from "./horse";
import './RaceTracks.css';


export const RaceTracks = () => {
    const [isStarted, setIsStarted] = useState(false);

    const horses = [
        new horse(1, 'Black', 'src/components/pictures/black-horse.png'),
        new horse(2, 'Brown', 'src/components/pictures/brown-horse.png'),
        new horse(3, 'Red', 'src/components/pictures/red-horse.png')
    ]

    return (            
        <>
            <section id='tracks'>
                {horses.map((horse) => (<Horse key={horse.id} name={horse.name} urlPicture={horse.urlPicture} isStarted = {isStarted}/>))}

            </section>
            <section id='containerStartButton'>
                <button id='startButton' onClick={() => setIsStarted(true)} onTransitionEnd={() => console.log("tak")}>Start</button>
            </section>
        </>
    );
}