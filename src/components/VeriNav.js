import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const ListExampleChat = () => (
    <Card>
        <CardTitle title="Index" />
        <Divider />
            <List>
                <ListItem
                primaryText="Pando"
                />
            </List>
            <List>
                <ListItem
                primaryText="ZipNode"
                />
            </List>
            <List>
                <ListItem
                primaryText="Wallscraper"
                />
            </List>
    </Card>
);

export default ListExampleChat;