import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100%' ,margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src='https://img2.pngio.com/avatar-png-icon-picture-400954-avatar-png-icon-user-avatars-png-512_506.png'
                        alt='avatar'
                        className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | BootStrap | Javascript | React | MySQL | LARAVEL</p>
                            <div className='social-links'>
                                    {/* linkedin */}
                                <a href='http://google.com' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-linkedin-square'   aria-hidden='true'/>
                                </a>
                                  {/* Github */}
                                <a href='http://google.com' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-github-square'   aria-hidden='true'/>
                                </a>
                                  {/* twitter */}
                                <a href='http://google.com' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-twitter-square'   aria-hidden='true'/>
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landingpage;