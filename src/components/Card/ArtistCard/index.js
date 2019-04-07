import React from "react";
import PropTypes from "prop-types";
import { Card, Image, Title, Description } from "../";

export function ArtistCard({ imageSource, name, subscribersAmount }) {
  return (
    <Card>
      <Image rounded source={imageSource} />
      <Title>{name}</Title>
      <Description>{`${subscribersAmount} subscribers`}</Description>
    </Card>
  );
}

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSource: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ uri: PropTypes.string })
  ]).isRequired,
  subscribersAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired
};

export default ArtistCard;
