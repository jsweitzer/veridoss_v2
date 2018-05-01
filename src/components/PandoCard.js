import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PandoCard = () => (
  <Card className="project-card">
    <CardTitle
      title="Pando"
      subtitle="Leveraging data to make better decisions"
    />
    <CardMedia
     className="project-img" 
    >
      <img className="p-img" src="images/gMapReduce.png" alt=""/>
    </CardMedia>
    <CardHeader title="Pando" subtitle="A set of tools for aquiring, grooming, and visualizing business data. The end result is an interactive Google Map visualizing the population density and availability of the selected service type in a geographic region. Shown above is an example for accounting services in Maryland."/>
  </Card>
);

export default PandoCard;