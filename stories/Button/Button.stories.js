import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../../src/components/Button';
const stories = storiesOf('Button|Button', module);

stories.add('primary', () => (
  <Button>Yoo</Button>
));