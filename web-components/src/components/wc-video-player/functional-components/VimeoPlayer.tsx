import { Fragment, FunctionalComponent, h } from '@stencil/core';
import { VideoPropsI } from '../models/video-props.interface';
// (props, children)

export const VimeoPlayer: FunctionalComponent<VideoPropsI> = props => {
  const { source } = props;
  return (
    <Fragment>
      <h2>Vimeo</h2>
      {/* <wc-card
        photo-user="https://randomuser.me/api/portraits/women/75.jpg"
        full-name="Sofía Martínez"
        role="Project Manager"
        resume="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui officia illum assumenda et, animi reiciendis earum explicabo deleniti. Doloribus non est illo adipisci
        itaque harum, architecto consequatur animi repudiandae etc."
      ></wc-card> */}
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
