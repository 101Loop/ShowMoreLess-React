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

## Table of contents

### Type aliases

- [ClassesObject](#classesobject)
- [OnExpand](#onexpand)
- [ShowMoreLessProps](#showmorelessprops)

## Type aliases

### ClassesObject

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `clickable?` | string | style class at the show more/less text level |
| `root?` | string | style class at the root level |
| `text?` | string | style class at the text level |

___

### OnExpand

#### Type declaration

▸ (`value`): void

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | boolean | This is the updated value, passed as a param |

##### Returns

void

___

### ShowMoreLessProps

#### Type declaration

| Name | Type | Description | Default |
| :------ | :------ | :------ | :------ |
| `classes?` | ClassesObject | an optional ClassesObject, for style | - |
| `expanded?` | boolean | determines whether the text is expanded or not | false |
| `onExpand?` | OnExpand | a callback function called on clicking show more/less text | - |
| `showLessLabel?` | string | label text for show more | ...Show More |
| `showMoreLabel?` | string | label text for show less | Show Less |
| `text` | string | text to be shown | - |
| `threshold?` | number | a point after which the text will be trimmed | 100 |

## License

MIT © [iamdipanshusingh](https://github.com/iamdipanshusingh)
