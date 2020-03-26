import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

 
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Fredrick Adams</h2>
                        <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                         />
                         <p style={{ width:'75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                        </p>
                        
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'fantasy'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+234) 803 248 4262
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'fantasy'}}>
                                        <i className="fa fa-telegram" aria-hidden="true"/>
                                        (+234) 803 248 4262
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'fantasy'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        freddyzine@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'fantasy'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        freddyzine
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                        </div>
                    </Cell>

                </Grid>
                <Grid  className="contact-grid2">
                    <Cell col={12}>

                        <hr/>
                        <div>
                            <p>Scroll Restoration - React Router: Declarative Routing for ...reacttraining.com › react-router › web › guides › scroll-restoration
Most of the time all you need is to “scroll to the top” because you have a long content page, that when navigated to, stays scrolled down. This is straightforward to ...

Implementing Infinite Scroll Into a React Component - Alligator.ioalligator.io › react › react-infinite-scroll
Jul 17, 2018 - For anybody unfamiliar, infinite scroll is the concept of new content being loaded as you scroll down a page. When you get to the bottom of the ...

React Scrollbarawesomeopensource.com › project › BosNaufal › react-scrollbar
The Simplest Scroll Area Component with custom scrollbar for React JS. ... names in oder to have some scrollbars with a various appearance on same page.
Searches related to how to make my react js page scrollable</p>
                        </div>
                    </Cell>
</Grid>
    
            </div>
        )
    }
}

export default Contact;