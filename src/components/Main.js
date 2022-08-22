import * as React from "react";
import KiloComponent from "./KiloComponent";
import MilesComponent from "./MilesComponent";

const Main = ()=>{
    const [speed, setSpeed] = React.useState(null); 

    const converter = (speed, type)=>{
        //responsible for updating the state
        if(type === 1){//kmph
            //set calculate and set mph
            const speedInMph = speed/1.6;
            setSpeed({
                speed_kmph: speed,
                speed_mph:speedInMph
            });
        }else{//mph
            //set calculate and set kmph
            const speedInKmph = speed*1.6;
            setSpeed({
                speed_kmph: speedInKmph,
                speed_mph:speed
            });
        }
    }

    return(<>
        <h3>This is Main!</h3>
        <KiloComponent calculate={converter} speed={speed.speed_kmph} />//1
        <MilesComponent calculate={converter} speed={speed.speed_mph} />//2
    </>)
}

export default Main;