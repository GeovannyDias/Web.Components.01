import { select, text, withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-notes';

import notes from './readme.md';
import reactNotes from './react.md';
import angularNotes from './angular.md';

export default {
  title: 'Atoms/Buttontest',
  parameters: {
    notes: {
      'Documentación': notes,
      'Uso en React': reactNotes,
      'Uso en Angular': angularNotes,
    },
    decorators: [withKnobs],
  },
};

const types = ['primary', 'secondary'];

export const Buttontest = () => `
    <pichincha-button-test type="${select('Type', types, 'primary')}" text="${text('Text', 'Button text')}"></pichincha-button-test>
`;
