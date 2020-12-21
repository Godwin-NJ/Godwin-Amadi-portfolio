import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education'
import Experience  from './experience'
import Skill from './skill'


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign:"center"}}>
                        <img 
                        src="https://www.shareicon.net/data/2016/05/26/771189_man_512x512.png"
                        alt='avatar'
                        style={{height:'200px'}}
                        />
                    </div>
                    
                    <h2 style={{paddingTop:'2em'}}>Godwin Amadi</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has
                    </p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    <h5>Address</h5>
                    <p>Lags, Nigeria</p>
                    <h5>Email</h5>
                    <p>amadigodwin7@gmail.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        < Education 
                         startYear={2012}
                         endYear={2017}
                         schoolName='Federal University Of Technology , Owerri'
                         schoolDescription='dummy text of the printing and typesetting industry'
                        />

                          < Education 
                         startYear={2012}
                         endYear={2017}
                         schoolName='Federal University Of Technology , Owerri'
                         schoolDescription='dummy text of the printing and typesetting industry'
                        />
                        <hr style={{borderTop:'3pxx solid #e22947'}} />

                        <h2>Experience</h2>
                        < Experience 
                         startYear={2018}
                         endYear={2019}
                         jobName='Sales Analyst'
                         jobDescription='Analysis'
                        />
                          < Experience 
                         startYear={2018}
                         endYear={2019}
                         jobName='Sales Analyst'
                         jobDescription='Analysis'
                        />
                          < Experience 
                         startYear={2018}
                         endYear={2019}
                         jobName='Sales Analyst'
                         jobDescription='Analysis'
                        />
                    <hr style={{borderTop:'3pxx solid #e22947'}} />
                    <h2>Skills</h2>
                    < Skill 
                        skill="Javascript"
                    />
                      < Skill 
                        skill="React"
                    />
                      < Skill 
                        skill="MySQL"
                    />
                      < Skill 
                        skill="PHP / LARAVEL"
                    />
                    </Cell>
                    
                </Grid>
            </div>
        )
    }
}


export default Resume;