import React, { Component } from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl'


class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Godwin Amadi</h2>
                        < img 
                        src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                        alt='avatar'
                        style={{height:'250px'}}
                        />
                        < p style={{width:'75%',margin:'auto', paddingTop:'1em'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                             industry. Lorem Ipsum has been the industry's standard dummy
                        </p>
                    </Cell>
                     <Cell col={6}>
                         <h2>Contact me</h2>
                         <hr/>
                         <div className='contact-list'>
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden='true'/>
                                (+234)-0813-840-5789
                                </ListItemContent>
                        </ListItem>
                       <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-envelope' aria-hidden='true'/>
                                amadigodwin7@gmail.com
                                </ListItemContent>
                        </ListItem>
                         <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-twitter' aria-hidden='true'/>
                                <a href='https://twitter.com/Godwin_NJ' target="_blank">godwin-nj</a>
                                </ListItemContent>
                        </ListItem>
                          <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-linkedin' aria-hidden='true'/>
                                <a href='https://www.linkedin.com/in/amadigodwin7/' target="_blank">Godwin Amadi</a>
                                </ListItemContent>
                        </ListItem>
                        </List>
                         </div>
                         
                     </Cell>
                    
                </Grid>
            </div>
        )
    }
}


export default Contact