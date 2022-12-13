import {Row} from 'react-bootstrap';
import DoneRecipe from "./DoneRecipe";

export default function DoneAllRecipes(props) {

  const getIdFromRecipeToPrep = (id) => {
    props.IdFromPrepToEat(id);
  }
  let recipesDoneSTR = props.RecToEat.map((recipeDone) => {
    return <DoneRecipe name={recipeDone.name}
      Image={recipeDone.Image}
      description={recipeDone.description}
      id={recipeDone.id}
      sendIdToPrep={getIdFromRecipeToPrep}/>  
    }
  )

  return (
    <div>
      <Row>
      {recipesDoneSTR}
      </Row>
    </div>
  );
}
