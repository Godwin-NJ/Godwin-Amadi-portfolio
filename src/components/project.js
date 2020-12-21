import React, { Component } from 'react';
import { Tabs,Tab, Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl';


class Project extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0}
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <div className='projects-grid'>
                {/* // project 1 */}
               <Card shadow={5} style={{width: '450x', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>
                React</CardTitle>
                <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu  style={{color:'#fff' }}>
                    <IconButton name='share'/>
                </CardMenu>
                </Card>
                
                       {/* // project 2 */}
               <Card shadow={5} style={{width: '450x', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>
                React</CardTitle>
                <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu  style={{color:'#fff' }}>
                    <IconButton name='share'/>
                </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
                return(<div><h1>This is Vanilla JS</h1></div>)
        }
        else if(this.state.activeTab === 2){
               return (<div><h1>This is PHP/MySQL</h1></div>)
        }
         else if(this.state.activeTab === 3){
              return   (<div><h1>This is Laravel</h1></div>)
        }
    }
    render(){
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabid)=>this.setState({activeTab:tabid})} ripple>
                    <Tab>React</Tab>
                    <Tab>Vanilla JS</Tab>
                     <Tab>PHP/MySQL</Tab>
                    <Tab>Laravel</Tab>
                </Tabs>
                {/* <section className='projects-grid'> */}
                    <Grid >
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                {/* </section> */}
            </div>
        )
    }
}


export default Project;