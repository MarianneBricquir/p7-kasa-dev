import Banner from "../components/Banner";
import imageApropos from "../img/img-apropos.jpg";
import Collapse from "../components/Collapse";
import dataCollection from "../data/aproposData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const APropos = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner
          image={imageApropos}
          alt={"Vallée et montagnes sous le soleil"}
          bannerText={""}
        />
        <section className="apropos">
          <div className="apropos-content">
            {dataCollection.map((data, index) => {
              return (
                <Collapse
                  key={index}
                  title={data.title}
                  content={data.content}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;
