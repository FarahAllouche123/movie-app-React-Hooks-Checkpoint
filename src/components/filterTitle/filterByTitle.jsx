import Form from "react-bootstrap/Form";


const FilterByTitle = ({ searchTitle, setSearchTitle }) => {

  return (
    // conteneur du champ de recherche
    <div className="container">

      <Form.Group className="mb-3">

        {/* input de recherche par titre */}
        <Form.Control
          type="text"
          placeholder="🔍search..."
          value={searchTitle} // valeur du state
          onChange={(e) => setSearchTitle(e.target.value)} // mise à jour du state
        />

      </Form.Group>

    </div>
  );
};

export default FilterByTitle;