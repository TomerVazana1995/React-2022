import React from 'react';
import {Card,Button,Col} from 'react-bootstrap';

export default function DoneRecipe(props){
 
    function movePrepBTN(){
        props.sendIdToPrep(props.id);

    }

    return( 
      <Col>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.Image} style={{ width: '100%', height:'15rem'}} />
          <Card.Body style={{backgroundColor:'#F0E68C'}}>
              <Card.Header style={{ textAlign: 'Center', fontWeight: "bold", fontSize:"20px"}}>{props.name}</Card.Header>
              <Card.Text>{props.description}</Card.Text>
              <Button style={{backgroundColor: 'black', borderBlockColor:'green'}} onClick={movePrepBTN}>con appetito</Button>
          </Card.Body>
      </Card>
      </Col>
  );
   
}
  









