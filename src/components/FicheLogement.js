import { useParams } from 'react-router-dom'
import annonces from '../data/annonces.json';
import Collapse from './Collapse';
import Slideshow from './Slideshow';

const FicheLogement = () => {

    const { annonceId } = useParams();
    //console.log(annonceId);
    const annonce = annonces.find((annonce) => annonce.id === annonceId);

    /*const equipement pour faire un map et envoyer dans la variable directement */
    /*ou tout les contents dans un tableau comme fait initialement */


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
                    annonce.tags.map((tag, index) => {
                        return (
                            <li key={index}>{tag}</li>
                        )
                    })
                }
            </ul>
            <div>{annonce.rating}</div>
            <Collapse
                title='Description'
                content={annonce.description} />
            <Collapse
                title='Equipements'
                content={annonce.equipments.map((equipement, index) =>
                (<ul>
                    <li key={index}>
                        {equipement}
                    </li>
                </ul>))} />
        </div >
    );
};

/**/

export default FicheLogement;