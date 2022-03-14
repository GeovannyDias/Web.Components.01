import { newSpecPage } from '@stencil/core/testing';
import { WcVideoPlayer } from './wc-video-player';

describe('wc-video-player', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcVideoPlayer],
      html: `<wc-video-player></wc-video-player>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-video-player>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-video-player>
    `);
  });
});
