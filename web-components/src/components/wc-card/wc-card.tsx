import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-card',
  styleUrl: 'wc-card.css',
  // styleUrls: ['wc-card1.css', 'wc-card2.css'],
  shadow: true,
})
export class WcCard {
  @Prop() photoUser: string = '';
  @Prop() fullName: string = '';
  @Prop() resume: string = '';
  @Prop() role: string = '';

  render() {
    return (
      <Host>
        <div class="b-card-box">
          <div class="b-card">
            <div class="b-card__content">
              <div class="b-card__photo-container">
                <img src={this.photoUser} alt="" class="b-card__photo" />
              </div>
              <h2 class="b-card__full-name">{this.fullName}</h2>
              <h3>{this.role}</h3>
              <div class="b-card__resume">{this.resume}</div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
