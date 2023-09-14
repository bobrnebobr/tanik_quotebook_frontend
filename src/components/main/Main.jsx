import React, {useEffect, useState} from 'react';
import "./Main.css"

const Main = () => {
    useEffect(() => {
        fetch("https://c317-212-193-77-253.ngrok.io/help_me",)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setTanikData(data)
            })
    }, []);

    const [tanikData, setTanikData] = useState("");

    return (
        <div id={"main"}>
            <div>Once Nikita Tarasov said:</div>
            <div>{tanikData}</div>
        </div>
    );
};

export default Main;