import React,{Component} from 'react';
import { Cell,Grid } from 'react-mdl';

class Skill extends Component{
    render(){
        return(
        <Grid>
            <Cell col={12}>
        <div style={{display:'flex'}}>
            <h4>{this.props.skill}
            </h4></div>
            </Cell>
            
        </Grid>
        );
    }
}


export default Skill;