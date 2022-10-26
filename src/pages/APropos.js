import Banner from '../components/Banner';
//import CollapseV2 from '../components/CollapseV2';
import Collapse from '../components/Collapse';
import imageApropos from '../img/img-apropos.jpg';

const APropos = () => {

    return (
        <div className="pages">
            <Banner image={imageApropos} alt={"Vallée et montagnes sous le soleil"} bannerText={""} />
            <section className="apropos-section-2">
                <div className="apropos-content">
                    <div className="accordions">
                        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toute les informations sont régulièrement vérifiées par nos équipes" />
                        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatruces de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" />
                        <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                    </div>

                    {/*Version avec contentData stocké*/}
                    {/*<CollapseV2 items={contentData} />*/}
                </div>
            </section >

        </div >
    );
};


/*
const contentData = [
    {
        title: 'Fiabilité',
        content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toute les informations sont régulièrement vérifiées par nos équipes'
    },
    {
        title: 'Respect',
        content: 'La bienveillance fait partie des valeurs fondatruces de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme'
    },
    {
        title: 'Service',
        content: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
    },
    {
        title: 'Sécurité',
        content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
    }
]
*/


export default APropos;