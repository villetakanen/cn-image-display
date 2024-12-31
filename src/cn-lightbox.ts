import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './styles.css'

interface Image {
  src: string;
  caption: string;
}

@customElement('cn-lightbox')
export class CnLightbox extends LitElement {
  @property({ type: Array, reflect: true })
  images: Image[] = [];

  static styles = css`
    /* Basic styles for the container */
    :host {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: var(--cn-lightbox-background, cyan);
      border-radius: var(--cn-lightbox-border-radius, 0.5rem);
      padding: var(--cn-lightbox-inner-spacing, 0);
    }
    :host img {
      border-radius: var(--cn-lightbox-border-radius, 0.5rem);
    }
    :host .single-figure {
      margin: 0;
      padding: 0;
    }
    :host .single-figure img {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      object-position: center;
    }
    :host .caption {
      margin: 0 auto;
      text-align: center;
    }
    :host .flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: var(--cn-lightbox-inner-spacing, 0);
      flex-wrap: nowrap;
      overflow-x: scroll;
      position: relative;
      scrollbar-color: var(--cn-lightbox-scrollbar-color, cyan) transparent;
    }
    :host .square-figure {
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0;
    }
    :host .square-figure img {
      aspect-ratio: 1 / 1;
      width: calc((100cqw * 9/16));
      object-fit: cover;
      object-position: center;
    }
  `;

render() {
  if (this.images.length === 1) {
    return html`
      <figure class="single-figure">
        <img src="${this.images[0].src}" alt="${this.images[0].caption}" />
        <figcaption class="caption">${this.images[0].caption}</figcaption>
  </figure>
    `;
  }
  if (this.images.length > 1) {
    return html`
      <div class="flex-container">
        ${this.images.map(
          (image) => html`
            <figure class="square-figure">
              <img src="${image.src}" alt="${image.caption}" />
              <figcaption class="caption">${image.caption}</figcaption>
            </figure>
          `,
        )}
      </div>
    `;
  }
  return html``; // Nothing to render if no images
}
}
