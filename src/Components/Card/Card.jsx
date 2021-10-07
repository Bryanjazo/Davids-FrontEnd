import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
export default function ImgMediaCard(media) {
  const mediaDetails = media.media;
  console.log(media);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={mediaDetails.title}
        height="140"
        image={mediaDetails.image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mediaDetails.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Source: {mediaDetails.source_id}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={mediaDetails.link}>
          <Button size="small">Learn More</Button>
        </a>
        <Button size="small">Share To:</Button>
        <FacebookShareButton url={mediaDetails.link}>
          <FacebookIcon size={15} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={mediaDetails.link}>
          <TwitterIcon size={15} round={true} />
        </TwitterShareButton>
      </CardActions>
    </Card>
  );
}
