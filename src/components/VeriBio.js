import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import {indigo500, green500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

const VeriBio = () => (
  <div>
  <Card className="squeeze">
    <CardTitle title="About" className="top" />
  </Card>
  <Card className="squeeze">
    <Divider />
      <CardHeader  avatar="images/selfie.png" title="Josh Sweitzer" subtitle="Developer"/>
      <CardText>
          I'm a developer and tech enthusiast who loves turning great ideas into reality.
      </CardText>
      <Divider />
  </Card>
  <Card className="squeeze">
  <CardHeader title="Tech" subtitle="Experience">
    </CardHeader>
    <CardHeader avatar="images/javascript.png" title="Javascript" subtitle="React, AngularJs, NodeJs, jQuery" />
    <CardHeader avatar="images/net.svg" title=".NET" subtitle="Building secure enterprise applications" />
    <CardHeader avatar="images/cloud.png" title="Cloud" subtitle="AWS and Azure hosted resources" />
    <CardHeader avatar="images/influxdb.png" title="TICK" subtitle="Scalable monitoring, and analysis" />
    <CardHeader avatar="images/sql.png" title="Sql" subtitle="Putting the data in data-driven applications" />
    <Divider />

  </Card>
  <Card className="squeeze">
    <CardHeader title="Contact" />
      <div className="icons">
        <a href="https://www.github.com/jsweitzer" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/josh-sweitzer-2b446547/" target="_blank">
          <LinkedInIcon color={indigo500}/>
        </a>
      </div>
  </Card>
  </div>
);

export default VeriBio;