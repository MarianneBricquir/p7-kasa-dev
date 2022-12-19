import Card from "../components/Card";
import Banner from "../components/Banner";
import annonces from "../data/annonces.json";
import imageAccueil from "../img/img-accueil.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner
          image={imageAccueil}
          alt={"Mer et falaises dans le brouillard"}
          bannerText={"Chez vous, partout et ailleurs"}
        />
        <section className="accueil">
          <div className="accueil__cards-container">
            {annonces.map((annonce, index) => {
              return <Card key={annonce.id} annonce={annonce} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
