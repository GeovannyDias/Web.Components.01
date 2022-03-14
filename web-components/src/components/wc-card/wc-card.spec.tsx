import { newSpecPage } from '@stencil/core/testing';
import { WcCard } from './wc-card';

describe('wc-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcCard],
      html: `<wc-card></wc-card>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-card>
    `);
  });
});
