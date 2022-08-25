import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function About() {
    <div className="container">
        <header>
            <h1 className="about-title">About Me</h1>
        </header>
        <div className="about-explanation">
            <h3 className="sub-heading">A little bit about myself</h3>
            <p classname="about-intro">
                I started to mess around with Codecademy to see what the hype in
                development all about. I quickly learned that this was a path I could
                see myself traveling down and I wanted to take it a step further. This
                intrigued me to sign up for the coding bootcamp at the University of
                Minnesota to learn Full-Stack web development. The rigorous six month
                course set me up with a lot of tools to be applied to the industry. I
                plan to continuiously bring to the team a strong effort and will to
                learn in the workplace.
            </p>
        </div>
        <article className="skillset">
            <h3 className="skillset-heading">Skillsets</h3>
            <List
                className="skillset-list"
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
            >
                <ListItem>
                    <ListItemText>HTML, Advanced CSS, and Git</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>JavaScipt</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Web APIs</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Third-Party APIs</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Server-Side APIs</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Node JS</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Object-Oriented Programming(OOP)</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Express.js</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>SQL</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText>Object-Relational Mapping(ORM)</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Model-View-Controller(MVC)</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Computer Science for JavaScipt</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>NoSQL</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Progressive Web AppListItemTextcations (PWA)</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>React and State</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>MERN: Appllo, GraphQL, React Router, Auth, and Heroku</ListItemText>
                </ListItem>
            </List>
        </article>
        <article>
            <h3 className="certificates-heading">Certificates</h3>
        </article>
    </div>;
}
