# 📊 Kizma bar charts

Rechart-style bar charts that weighs less than 1kb!!!

## Usage

```jsx
/** @jsx Kaif.h @jsxFrag Kaif.Fragment */
import Kaif from 'kaif'

import BarChart from 'bar-charts'

const data = [
  ['Jan', 1367],
  ['Feb', 1454],
  ['Mar', 3846],
  ['Apr', 5526],
  ['May', 4074],
  ['Jun', 5971],
  ['Jul', 3858],
  ['Aug', 3856],
  ['Sep', 4294],
  ['Oct', 4053],
  ['Nov', 1963],
  ['Dec', 4350],
]

let App = () => {
  return (
    <BarChart id="root" data={data}/>
  )
}
// or
App = () => {
  return BarChart({ id:"root", data })
}

Kaif.init(document.getElementById('root'), App)
```

## Design reference
https://ui.shadcn.com/examples/dashboard
