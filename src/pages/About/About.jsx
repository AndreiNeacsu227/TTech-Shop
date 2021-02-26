import React from 'react';
import Layout from '../../components/Layout/Layout';
import "./About.css"

function About() {
    return(
        <div>
            <Layout>
                <div className="container">
                    <div className="row">
                        <p className="aboutText">Despre noi</p>
                    </div>
                    <div className="row">
                    <p>
                        TTech are misiunea de a face tehnologia disponibila tuturor clientilor la nivel national, facilitand astfel disponibilitatea serviciilor si produselor care le vor satisface cel mai bine nevoile. Conceptul omnichannel aduce confortul si usurinta in procesul de informare, luare a deciziei, interactiune cu produsul, cumparare si apoi utilizare.
                    </p>
                    <img src="https://i.imgur.com/e1prOGt.jpg" alt=""/>
                    <p>Inca de la infiintare, compania TTech si-a propus sa ofere produse de calitate adecvate nevoilor consumatorilor si solutii de finantare acesibile.</p>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default About;