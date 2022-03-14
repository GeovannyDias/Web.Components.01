import { Component, Event, h, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pichincha-button-test',
  styleUrl: 'pichincha-button.scss',
  shadow: true,
})
export class PichinchaButton {
  // reflect → refleja la opcion del prop al importar el componente
  @Prop({ reflect: true }) public type: 'primary' | 'secondary' = 'primary';
  @Prop({ reflect: true }) public text: string = 'button';
  @Event() public iClick: EventEmitter;

  emitEvent(e: any) {
    e.preventDefault();
    this.iClick.emit(true);
  }

  render() {
    return (
      <button class={`button-test button-test-${this.type}`} onClick={e => this.emitEvent(e)}>
        {this.text}
      </button>
    );
  }
}
