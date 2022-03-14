import { Fragment, FunctionalComponent, h } from '@stencil/core';
import { VideoPropsI } from '../models/video-props.interface';

export const YouTubePlayer: FunctionalComponent<VideoPropsI> = props => {
  const { source } = props;
  return (
    <Fragment>
      <h2>YouTube</h2>
      <iframe
        width="560"
        height="315"
        src={source}
        title="Video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Fragment>
  );
};
