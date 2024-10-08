'use client'

import { useSuspenseQuery } from '@suspensive/react-query-4'
import { type ComponentProps, forwardRef } from 'react'
import { query } from '~/query'

export const Text = forwardRef<HTMLParagraphElement, ComponentProps<'p'> & { ms: number }>(({ ms, ...props }, ref) => {
  const { data: text } = useSuspenseQuery(query.text(ms))
  return (
    <p {...props} ref={ref}>
      result: {text}
    </p>
  )
})
Text.displayName = 'Text'
