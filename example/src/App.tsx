import React from 'react'

import ShowMoreLess from 'show-more-less'
import 'show-more-less/dist/index.css'

const App = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis excepturi accusamus ipsum, doloremque voluptatem nisi odio quis voluptates facilis quam sequi quibusdam quia, in doloribus? Quisquam dolorem earum natus.';
  console.log(text.substring(0, 100));
  return <ShowMoreLess text={text} threshold={100} />
}

export default App
