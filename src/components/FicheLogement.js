import { useParams } from 'react-router-dom'
import annonces from '../data/annonces.json';
import Slideshow from './Slideshow';
import Collapse from './Collapse';

const FicheLogement = () => {

    const { annonceId } = useParams();
    //console.log(annonceId);
    const annonce = annonces.find((annonce) => annonce.id === annonceId);

    return (
        <div className='pages' >
            <Slideshow key={annonce.pictures} pictures={annonce.pictures} />
            <div className='annonce-title'>
                <div className='annonce-title__text'>
                    <h1> {annonce.title}</h1>
                    <p>{annonce.location}</p>
                </div>
                <div className='annonce-title__host'>
                    <p>{annonce.host.name}</p>
                    <div>{annonce.host.picture}</div>
                </div>
            </div>
            <ul>
                {
                    annonce.tags.map((tag, i) => {
                        return (
                            <li key={i}>{tag}</li>
                        )
                    })
                }
            </ul>
            <div>{annonce.rating}</div>
            <Collapse title="Description" content={annonce.description} />
            <Collapse title="Equipements" content={annonce.equipements} />
        </div >
    );
};

export default FicheLogement;