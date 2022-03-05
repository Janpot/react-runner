import React from 'react'

import { useAsyncRunner } from '../hooks/useAsyncRunner'
import styles from './Preview.module.css'

if (typeof window !== 'undefined') {
  // @ts-expect-error
  window.process = { env: {} }
}

const baseScope = {
  import: {
    react: React,
  },
}

export const Preview = ({ files }: { files: Record<string, string> }) => {
  const { element, styleSheets, error, isLoading } = useAsyncRunner({
    files,
    scope: baseScope,
  })

  if (typeof document !== 'undefined') {
    document.adoptedStyleSheets = styleSheets
  }

  return (
    <div className={styles.Preview}>
      {isLoading && <div className={styles.PreviewLoading}></div>}
      <div className={styles.PreviewElementContainer}>
        <div id="data-preview-element" className={styles.PreviewElement}>
          {element}
        </div>
      </div>
      {error && <pre className={styles.PreviewError}>{error}</pre>}
    </div>
  )
}
