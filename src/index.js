import { h, patch } from 'superfine'

import Hello from './hello'

patch(
  document.getElementById('root'),
  Hello(),
)