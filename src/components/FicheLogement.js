import { useParams } from 'react-router-dom'
import annonces from '../data/annonces.json';
import Slideshow from './Slideshow';

const FicheLogement = () => {

    const { annonceId } = useParams();
    //console.log(annonceId);
    const annonce = annonces.find((annonce) => annonce.id === annonceId)


    return (
        <div className='pages'>
            <Slideshow key={annonce.pictures} pictures={annonce.pictures} />
            {/*
                    annonce.pictures.map((picture) => {
                        return (
                            <Slideshow key={annonce.picture} picture={annonce.picture} />
                        )
                    })*/

            }
            <h1>{annonce.title}</h1>
        </div>
    );
};

export default FicheLogement;