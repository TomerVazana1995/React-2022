import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import DoneAllRecipes from '../Functional component/DoneAllRecipes';
import AllRecipes from '../Functional component/AllRecipes';


//Initial initialization of the recipes
const localRecipesL = [
    {id:1, name: "Gnocchi", description: "Mouth-watering gnocchi, in a cream sauce, served with parmesan on top",Image :"https://images.wcdn.co.il/f_auto,q_auto,w_600,t_54/4/2/8/3/428316-46.jpg" },
    {id:2, name: "Mushroom cream pasta", description: "Penne pasta served in a cream sauce accompanied by wild mushrooms",Image: "https://nfarm.co.il/wp-content/uploads/2020/10/penne_white.jpg"},
    {id:3, name: "Pesto cream ravioli", description: "Sweet potato ravioli, served with homemade pesto cream garnished with parmesan on top",Image: "https://my-little-kitchen.com/wp-content/uploads/2013/05/ravioli_with_pesto.jpg"}
];

export default class MyKitchen extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            prepare: localRecipesL,
            Eat:[],
        };
      }

      
      RecToEat = (id) => {
        let tmpP = this.state.prepare.filter(recipe => recipe.id !== id);
        let EatArr = this.state.prepare.filter(recipe => recipe.id === id);
        let tmpE = [...this.state.Eat,];
        tmpE.push(EatArr[0]);

      
        this.setState({
          prepare: tmpP,
          Eat: tmpE,
        });
      }

       
      RecToPrep = (id) => {
        let tmpE = this.state.Eat.filter(recipe => recipe.id !== id);
        
        let preparing = this.state.Eat.filter(recipe => recipe.id === id);
        let tmpP = [...this.state.prepare,];
        tmpP.push(preparing[0]);

        
        this.setState({
          Eat: tmpE,
          prepare: tmpP
        });
      }


      render() {
        return (
          <div style={{backgroundColor:"black"}}>
            <Container>
              <AllRecipes
              ResToPrep={this.state.prepare} sendIdToEatFromRecList={this.RecToEat}></AllRecipes>
            </Container>
            <div style={{ backgroundColor: '#F0E68C',  fontSize:"20px"}}>
            <hr ></hr>
            <hr></hr>
            </div>

            <Container>
              <DoneAllRecipes RecToEat={this.state.Eat} IdFromPrepToEat={this.RecToPrep}></DoneAllRecipes>
            </Container>

          </div>
        )
      }

}