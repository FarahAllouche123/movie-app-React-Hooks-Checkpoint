import "./movieCard.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  // console.log('movie', movie)
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
           {movie.description}
          </Card.Text>
          <Button variant="warning">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;