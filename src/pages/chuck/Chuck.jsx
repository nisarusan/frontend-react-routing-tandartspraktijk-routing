import Header from "../../components/header/Header.jsx";
import gaatjes from "../../assets/dentist.svg";
import React, {useEffect, useState} from "react";
import './Chuck.css';
import axios from "axios";

function Chuck() {
    const [resultData, toggleData] = useState('');
    useEffect(() => {
        async function getChuckNorrisData() {
            let resultData;
            try {
                const result = await axios.get('https://api.chucknorris.io/jokes/random');
                toggleData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getChuckNorrisData();
    }, []);
    console.log(resultData);

    return (
        <>
            <main className="page-container">
                <Header icon={gaatjes} title="Chuck"/>
                {resultData && (
                    <div key={resultData.id}>
                        <img src={resultData.icon_url} alt=""/>
                        <p>{resultData.value}</p>
                    </div>
                )}
                <p>
                    Consectetur adipisicing elit. Consequuntur doloremque esse fuga illum, impedit necessitatibus non
                    officiis sapiente tempora velit.
                    Amet consequuntur deleniti distinctio ea eveniet id, labore magni neque obcaecati praesentium
                    quibusdam quidem, quod, repellat sequi ut.
                    Blanditiis, reiciendis.
                </p>
            </main>
        </>
    )
}

export default Chuck;