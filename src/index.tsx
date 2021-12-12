import * as React from 'react'
import styles from './styles.module.css';

/**
 * @typedef {Function} OnExpand - a custom function to handle the onExpand click
 * @param {boolean} value - This is the updated value, passed as a param
 */
export type OnExpand = (value: boolean) => void;

/**
 * @typedef {Object} ClassesObject - a custom object for style classes
 * @property {string} root - an optional style class at the root level
 * @property {string} text - an optional style class at the text level
 * @property {string} clickable - an optional style class at the show more/less text level
 */
export type ClassesObject = {
  root?: string,
  text?: string,
  clickable?: string,
}

/**
 * @typedef {Object} ShowMoreLessProps - a custom props object
 * @property {string} text - text to be shown
 * @property {string} [showMoreLabel="...Show More"] - an optional label text for show more 
 * @property {string} [showLessLabel="Show Less"] - an optional label text for show less
 * @property {string} classes - an optional ClassesObject, for style
 * @property {string} [threshold=100] - an optional param, a point after which the text will be trimmed
 * @property {string} [expanded=false] - an optional param, determines whether the text is expanded or not
 * @property {string} onExpand - an optional param, a callback function called on clicking show more/less text
 */
export type ShowMoreLessProps = {
  text: string,
  showMoreLabel?: string,
  showLessLabel?: string,
  classes?: ClassesObject,
  threshold?: number,
  expanded?: boolean,
  onExpand?: OnExpand,
}

function ShowMoreLess({ text, classes, showLessLabel = 'Show Less', showMoreLabel = '...Show More', threshold = 100, expanded = false, onExpand }: ShowMoreLessProps) {
  // Style class for show more/less
  const clickableClass = [classes?.clickable || styles.clickable];

  // if a callback is provided, add a pointer effect to the clickable class
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
