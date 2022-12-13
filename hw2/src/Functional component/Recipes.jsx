import React from 'react';
import {Card,Button,Col} from 'react-bootstrap';

export default function Recipes(props){
  const EatBTN = () => {
    props.sendId2Eat(props.id);
  }

    return( 
      <Col>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.Image} style={{ width: '100%', height:'14rem'}} />
          <Card.Body style={{backgroundColor:'#F0E68C'}}>
              <Card.Header style={{ textAlign: 'Center', fontWeight: "bold", fontSize:"20px"}}>{props.name}</Card.Header>
              <Card.Text>{props.description}</Card.Text>
              <Button style={{backgroundColor: 'black', borderBlockColor:'green'}} class={Button} onClick={EatBTN} >let's make your dish</Button>
          </Card.Body>
      </Card>
      </Col>
  );
   
}
  









