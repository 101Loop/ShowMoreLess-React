# ShowMoreLess

> React library to manage long paragraphs

[![NPM](https://img.shields.io/npm/v/show-more-less.svg)](https://www.npmjs.com/package/show-more-less) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save show-more-less
```

## Usage

```tsx
import React, { useState } from 'react'
import styles from './ShowMoreLess.module.scss'
import ShowLessMore from 'show-more-less'
import 'show-more-less/dist/index.css'

function Example() {
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores, cumque tenetur omnis debitis eligendi illum adipisci. Amet, ex soluta. Consequatur ab minus voluptates illum exercitationem, repellat perferendis iure possimus.'

  const [expanded, setExpanded] = useState(false)

  return (
    <ShowLessMore
      text={text}
      threshold={800}
      expanded={expanded}
      onExpand={setExpanded}
      classes={{
        root: styles.root,
        text: styles.text,
        clickable: styles.clickable
      }}
    />
  )
}

export default Example
```

## License

MIT © [iamdipanshusingh](https://github.com/iamdipanshusingh)
