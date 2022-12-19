import { useParams, ScrollRestoration } from "react-router-dom";
import annonces from "../data/annonces.json";
import NotFound from "./NotFound";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FicheLogement = () => {
  // React router dom v 5 : https://v5.reactrouter.com/web/guides/scroll-restoration
  /*useEffect(() => {
        window.scrollTo(0, 0);
    }, []);*/

  const { annonceId } = useParams();
  const annonce = annonces.find((annonce) => annonce.id === annonceId);

  //Si l'annonce n'existe pas, affichage de la page Erreur 404
  if (annonce == null) {
    return <NotFound />;
  }

  const equipements = annonce.equipments.map((equipement, index) => (
    <li key={index}>{equipement}7</li>
  ));

  return (
    <div>
      <Header />
      <main>
        {/*React router dom v 6.4 : https://reactrouter.com/en/main/components/scroll-restoration*/}
        <ScrollRestoration />
        
        {/*Carousel*/}
        <Slideshow key={annonce.pictures} pictures={annonce.pictures} />

        <div className="annonce-infos-container">
          {/*Title and tags*/}
          <div className="annonce-title">
            <div className="annonce-title__text">
              <h1> {annonce.title}</h1>
              <p>{annonce.location}</p>
            </div>
            <ul className="annonce-title__tags">
              {annonce.tags.map((tag, index) => {
                return <li key={index}>{tag}</li>;
              })}
            </ul>
          </div>

          {/*Host and rating*/}
          <div className="annonce-hostrating">
            <div className="annonce-hostrating__host">
              <p className="annonce-hostrating__host__name">
                {annonce.host.name}
              </p>
              <div className="annonce-hostrating__host__img-container">
                <img src={annonce.host.picture} alt="Photographie de l'hôte" />
              </div>
            </div>
            <Rating rating={annonce.rating} />
          </div>
        </div>

        {/*Description and equipements*/}
        <div className="annonce-infos">
          <div className="annonce-infos__content">
            <Collapse title="Description" content={[annonce.description]} />
          </div>
          <div className="annonce-infos__content">
            <Collapse title="Equipements" content={equipements} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FicheLogement;
