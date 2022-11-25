import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Banner from '../components/Banner';
import annonces from '../data/annonces.json';
import imageAccueil from '../img/img-accueil.jpg';

const Home = () => {
    <Header />
    return (
        <div className="pages">
            <Banner image={imageAccueil} alt={"Mer et falaises dans le brouillard"} bannerText={"Chez vous, partout et ailleurs"} />
            <section className="accueil">
                <div className="accueil__cards-container">
                    {
                        annonces.map((annonce, index) => {
                            return (
                                <Card key={annonce.id} annonce={annonce} />
                            )
                        })
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;