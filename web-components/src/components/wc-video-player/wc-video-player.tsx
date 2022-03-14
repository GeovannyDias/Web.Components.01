import { Component, Host, h, Prop } from '@stencil/core';
import { VimeoPlayer } from './functional-components/VimeoPlayer';
import { YouTubePlayer } from './functional-components/YoutubePlayer';

enum VIDEO_PROVIDERS {
  YOUTUBE = 'youtube',
  VIMEO = 'vimeo',
}

@Component({
  tag: 'wc-video-player',
  styleUrl: 'wc-video-player.css',
  shadow: true,
})
export class WcVideoPlayer {
  @Prop() source: string = '';
  @Prop() provider: string = '';

  render() {
    if (!this.source) return <div>No video source provided!</div>;
    return (
      <Host>
        {this.provider === VIDEO_PROVIDERS.YOUTUBE && <YouTubePlayer source={this.source} />}
        {this.provider === VIDEO_PROVIDERS.VIMEO && <VimeoPlayer source={this.source} />}
      </Host>
    );
  }
}

/* 
{this.provider === videoProvider.YOUTUBE && <h2>YouTube</h2>}
  {this.provider === videoProvider.VIMEO && <h2>Vimeo</h2>}
  <iframe
    width="560"
    height="315"
    src={this.source}
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  ></iframe> 
*/
