import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ZipNodeCard = () => (
  <Card className="project-card">
    <CardTitle
      title="ZipNode"
      subtitle="A MEAN Microservice"
    />
    <CardMedia className="project-img" >
      <img className="p-img" src="images/mean.png" alt="" />
    </CardMedia>
    <CardHeader title="ZipNode" subtitle="ZipNode is a dead simple microservice that provides zipcode validation. Built on the MEAN stack." />
  </Card>
);

export default ZipNodeCard;