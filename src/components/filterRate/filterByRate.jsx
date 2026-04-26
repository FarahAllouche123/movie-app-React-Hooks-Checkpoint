import { Flex, Rate } from "antd";

// descriptions affichées au survol des étoiles
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const FilterByRate = ({ searchRate, setSearchRate }) => {
  return (
    // conteneur flex 
    <Flex gap="middle" vertical>
      
      {/* composant étoiles pour filtrer par note */}
      <Rate
        tooltips={desc} // texte au survol des étoiles
        onChange={setSearchRate} // met à jour le state dans App
        value={searchRate} // valeur actuelle sélectionnée
      />

    </Flex>
  );
};

export default FilterByRate;