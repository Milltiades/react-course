import React from 'react'
import { Remarkable } from 'remarkable'

const md = new Remarkable()

const ResultsPreview = ({name}) => {
  return (
    <div
    dangerouslySetInnerHTML={{__html: md.render(name)}}
    />
  )
}

export default ResultsPreview