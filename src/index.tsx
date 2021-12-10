import * as React from 'react'
import { useState } from 'react';
import styles from './styles.module.css';

interface ShowMoreLess {
  text: string,
  showMoreLabel?: string,
  showLessLabel?: string,
  classes?: any,
  threshold?: number,
}

function ShowMoreLess({ text, classes, showLessLabel = 'Show Less', showMoreLabel = '...Show More', threshold = 100 }: ShowMoreLess) {
  const [expanded, setExpanded] = useState(false);
  const clickableClass = classes?.clickable || styles.clickable;

  return (
    <div className={classes?.root}>
      <span className={classes?.text}>
        {expanded ? text : text.substring(0, threshold)}
      </span>
      {
        <span style={{
          cursor: 'pointer'
        }} className={clickableClass} onClick={() => setExpanded(!expanded)}>{expanded ? showLessLabel : showMoreLabel}</span>
      }
    </div>);
}

export default ShowMoreLess;
