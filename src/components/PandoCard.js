import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PandoCard = () => (
  <Card>
    <CardTitle
      title="Pando"
      subtitle="Leveraging data to make better decisions"
    />
    <CardMedia
     className="project-img" overlay={<CardTitle subtitle="Accounting services in Maryland with population heatmap overlay" />}
    >
      <img src="images/gMapReduce.png" alt=""/>
    </CardMedia>
    <CardHeader title="Pando" subtitle="A set of tools for aquiring, grooming, and visualizing business data. The end result is an interactive Google Map visualizing the population density and availability of the selected service type in a geographic region"/>
  </Card>
);

export default PandoCard;