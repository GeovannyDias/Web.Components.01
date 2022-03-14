import { newSpecPage } from '@stencil/core/testing';
import { PichinchaButton } from './pichincha-button';

describe('pichincha-button-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PichinchaButton],
      html: `<pichincha-button-test></pichincha-button-test>`,
    });
    expect(page.root).toEqualHtml(`
      <pichincha-button-test type="primary" text="button">
        <mock:shadow-root>
          <button class="button-test button-test-primary">button</button>
        </mock:shadow-root>
      </pichincha-button-test>
    `);
  });

  // Cuando los textos no estan por defecto se debe pasar por el template html (type="secondary" text="Click Me")
  // y por el componente (type="secondary" text="Click Me")

  it('renders text atribute', async () => {
    const page = await newSpecPage({
      components: [PichinchaButton],
      html: `<pichincha-button-test type="secondary" text="Click Me"></pichincha-button-test>`,
    });
    expect(page.root).toEqualHtml(`
      <pichincha-button-test type="secondary" text="Click Me">
        <mock:shadow-root>
          <button class="button-test button-test-secondary">Click Me</button>
        </mock:shadow-root>
      </pichincha-button-test>
    `);
  });

  // Test click event
  it('its emit iClick event', async () => {
    const page = await newSpecPage({
      components: [PichinchaButton],
      html: `<pichincha-button-test></pichincha-button-test>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.querySelector('button')).toBeFalsy();

    const button = page.root.shadowRoot.querySelector('button');
    const mockClick = jest.fn();
    page.win.addEventListener('iClick', mockClick);
    button.click();
    page.waitForChanges();
    expect(mockClick).toHaveBeenCalled();
  });
});
