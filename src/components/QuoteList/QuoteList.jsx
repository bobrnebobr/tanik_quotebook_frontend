import React, {useEffect, useState} from 'react';

const QuoteList = () => {
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
        <div>

        </div>
    );
};

export default QuoteList;