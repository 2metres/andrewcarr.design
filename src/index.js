import { h, patch } from 'superfine'

import Hello from './hello.mdx'

patch(
  document.getElementById('root'),
  Hello(),
)