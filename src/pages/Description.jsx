import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { moviesData } from "../moviesData";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './Description.css';
const Description = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
const navigate = useNavigate();
  useEffect(() => {
    setMovie(moviesData.find((mv) => mv.id === +params.id));
  }, [params.id]);

 return (
  <div className="description-page">
    <h1>{movie.title}</h1>

    <Container>
      <Row>
        <Col md={7}>
          <div className="description-box">
            <p>{movie.description}</p>

            <Button variant="warning" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>
        </Col>

        <Col md={5}>
          <iframe
            className="trailer-frame"
            src={movie.trailer}
            title={movie.title}
            allowFullScreen
          />
        </Col>
      </Row>
    </Container>
  </div>
);
};

export default Description;