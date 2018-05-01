import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import {indigo500,green500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

const VeriNews = () => (
  <div>
    <Card className="squeeze">
      <CardTitle title="Cool stuff" />
    </Card>
    <Card className="squeeze">
      <CardTitle title="Python" subtitle="Resource Links">
      </CardTitle>
      <a href="https://awesome-python.com/" target="_blank">
        <CardHeader class="resource-link" title="Awesome Python" subtitle="A truly awesome and well organized collection of python libraries" />
      </a>
      <a target="_blank" href="http://scikit-learn.org/dev/auto_examples/plot_anomaly_comparison.html">
        <CardHeader class="resource-link" title="Outlier Detection" subtitle="Plug and play anomaly with four different flavors" />
      </a>
    </Card>
    <Card className="squeeze">
      <CardTitle title="General" subtitle="Learning">
      </CardTitle>
      <a href="http://exercism.io/" target="_blank">
        <CardHeader class="resource-link" title="Exercism" subtitle="Collaborate while learning new languages by solving problems" />
      </a>
      <a target="_blank" href="https://www.reddit.com/r/dailyprogrammer/">
        <CardHeader class="resource-link" title="Daily Programmer" subtitle="Community driven coding challenges" />
      </a>
    </Card>
  </div>
);

export default VeriNews;