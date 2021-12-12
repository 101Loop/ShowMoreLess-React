import * as React from 'react'
import styles from './styles.module.css';

type OnExpand = (value: boolean) => void;

type ClassesObject = {
  root?: string,
  text?: string,
  clickable?: string,
}

type ShowMoreLessProps = {
  text: string,
  showMoreLabel?: string,
  showLessLabel?: string,
  classes?: ClassesObject,
  threshold?: number,
  expanded?: boolean,
  onExpand?: OnExpand,
}

function ShowMoreLess({ text, classes, showLessLabel = 'Show Less', showMoreLabel = '...Show More', threshold = 100, expanded = false, onExpand }: ShowMoreLessProps) {
  const clickableClass = [classes?.clickable || styles.clickable];
  if (onExpand) {
    clickableClass.push(styles.pointer);
  }

  return (
    <div className={classes?.root}>
      <span className={classes?.text}>
        {expanded ? text : text.substring(0, threshold)}
      </span>
      {
        <span className={clickableClass.join(' ')} onClick={() => {
          if (onExpand) {
            onExpand(!expanded);
          }
        }}>{expanded ? showLessLabel : showMoreLabel}</span>
      }
    </div>);
}

export default ShowMoreLess;
