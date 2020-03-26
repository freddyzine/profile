import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
 
class Landingpage extends Component {
    render() {
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://cdn5.f-cdn.com/contestentries/1214167/25138695/5a4379bb25cd9_thumb900.jpg"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Web & Mobile Developer | Programmer | Designer</h1>
                            
                            <hr/>
                            <p>HTML/CSS | Boostrap | React | Wordpress | Ionic | Angular | Github |</p>
                            <p> Express | MongoDB | MySQL | PHP Laravel | VB.Net | Adobe Suite | CorelDraw | Gimp | Blender</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                 {/* Github */}
                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                                 {/* Youtube */}
                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  aria-hidden="true" />
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