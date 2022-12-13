import Recipes from './Recipes';
import {Row} from 'react-bootstrap';

export default function AllRecipes(props) {

  const getIdFromRecipeToEat = (idToEat) => {
    props.sendIdToEatFromRecList(idToEat);
  }

  let STR = props.ResToPrep.map((recipe) => {
    return <Recipes name={recipe.name}
      Image={recipe.Image}
      description={recipe.description}
      id={recipe.id}
      sendId2Eat={getIdFromRecipeToEat} />;
  }
  )

  return (
    <div>
      <Row>
      {STR}
      </Row>
    </div>
  );
}
