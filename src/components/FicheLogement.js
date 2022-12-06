import { useParams } from 'react-router-dom'
import annonces from '../data/annonces.json';
import NotFound from '../pages/NotFound';
import Collapse from './Collapse';
import Rating from './Rating';
import Slideshow from './Slideshow';

const FicheLogement = () => {

    const { annonceId } = useParams();
    //console.log(annonceId);
    const annonce = annonces.find((annonce) => annonce.id === annonceId);

    //Faire une condition : si l'annonce n'existe pas = afficher page 404 - à tester
    if (annonce == null) {
        return <NotFound />;
    }


    const equipements = annonce.equipments.map((equipement, index) =>
    (
        <li key={index}>
            {equipement}
        </li>
    ))

    return (
        <main>

            {/*Carousel*/}
            <Slideshow key={annonce.pictures} pictures={annonce.pictures} />

            <div className='annonce-infos-container'>
                {/*Title and tags*/}
                <div className='annonce-title'>
                    <div className='annonce-title__text'>
                        <h1> {annonce.title}</h1>
                        <p>{annonce.location}</p>
                    </div>
                    <ul className='annonce-title__tags'>
                        {
                            annonce.tags.map((tag, index) => {
                                return (
                                    <li key={index}>
                                        {tag}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>


                {/*Host and rating*/}
                <div className='annonce-hostrating'>
                    <div className='annonce-hostrating__host'>
                        <p className='annonce-hostrating__host__name'>{annonce.host.name}</p>
                        <div className='annonce-hostrating__host__img-container'>
                            <img src={annonce.host.picture} alt="Photographie de l'hôte" />
                        </div>
                    </div>
                    <Rating rating={annonce.rating} />
                </div>

            </div>
            {/*Description and equipements*/}
            <div className='annonce-infos'>
                <div className='annonce-infos__content'>
                    <Collapse
                        title='Description'
                        content={[annonce.description]} />
                </div>
                <div className='annonce-infos__content'>
                    <Collapse
                        title='Equipements'
                        content={equipements} />
                </div>
            </div >
        </main >
    );
};

/**/

export default FicheLogement;