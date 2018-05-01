import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import PandoCard from './PandoCard';
import ZipNodeCard from './ZipNodeCard';
import {green500} from 'material-ui/styles/colors';

const VeriProjects = () => (
  <div>
    <Card className="project-head">
      <CardTitle title="Projects" />
    </Card>
    <PandoCard className="squeeze" />
    <ZipNodeCard className="squeeze" />
  </div>
);

export default VeriProjects;