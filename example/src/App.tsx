import React, { useState } from 'react'

import styles from './App.module.scss'
import ShowMoreLess from 'show-more-less'
import 'show-more-less/dist/index.css'

const App = () => {
  const [expanded, setExpanded] = useState(false)

  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis excepturi accusamus ipsum, doloremque voluptatem nisi odio quis voluptates facilis quam sequi quibusdam quia, in doloribus? Quisquam dolorem earum natus.';

  return <ShowMoreLess
    text={text}
    threshold={100}
    expanded={expanded}
    onExpand={setExpanded}
    classes={{
      root: styles.root,
      text: styles.text,
      clickable: styles.clickable
    }}
  />
}

export default App
