import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import PandoCard from './PandoCard';
import ZipNodeCard from './ZipNodeCard';

const VeriProjects = () => (
  <Card>
    <CardTitle title="Projects"/>
    <Divider/>
    <PandoCard />
    <ZipNodeCard />
  </Card>
);

export default VeriProjects;