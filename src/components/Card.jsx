import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ annonce }) => {

    let navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/annonce/${annonce.id}`)}>
            <div className="card__content-img">
                <img src={annonce.cover} alt="Aperçu du logement en miniature" />
                <div className="card__content-img__title">
                    <div className="card__content-img__title__text">
                        {annonce.title}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;


// Prop types
Card.propTypes = {
    annonce: PropTypes.object,
};