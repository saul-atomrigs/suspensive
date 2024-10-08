import { queryFn, queryKey } from '@suspensive/utils'
import type { ReactNode } from 'react'
import { describe, expectTypeOf, it } from 'vitest'
import { PrefetchQuery } from './PrefetchQuery'
import { queryOptions } from './queryOptions'

describe('<PrefetchQuery/>', () => {
  it('type check', () => {
    ;() => (
      <PrefetchQuery
        queryKey={queryKey}
        queryFn={queryFn}
        //@ts-expect-error no suspense
        suspense={boolean}
      />
    )
    ;() => (
      <PrefetchQuery
        queryKey={queryKey}
        queryFn={queryFn}
        //@ts-expect-error no useErrorBoundary
        useErrorBoundary={boolean}
      />
    )
    ;() => (
      <PrefetchQuery
        queryKey={queryKey}
        queryFn={queryFn}
        //@ts-expect-error no enabled
        enabled={boolean}
      />
    )
    ;() => (
      <PrefetchQuery
        queryKey={queryKey}
        queryFn={queryFn}
        //@ts-expect-error no placeholderData
        placeholderData="placeholder"
      />
    )
    ;() => (
      <PrefetchQuery
        queryKey={queryKey}
        queryFn={queryFn}
        //@ts-expect-error no placeholderData
        placeholderData="placeholder"
      />
    )
    ;() => <PrefetchQuery queryKey={queryKey} queryFn={queryFn} />
    const options = queryOptions({
      queryKey,
      queryFn,
    })
    ;() => <PrefetchQuery {...options} />
    expectTypeOf(<PrefetchQuery queryKey={queryKey} queryFn={queryFn} />).toEqualTypeOf<JSX.Element>()
    expectTypeOf(<PrefetchQuery queryKey={queryKey} queryFn={queryFn} />).not.toEqualTypeOf<ReactNode>()
    expectTypeOf(<PrefetchQuery {...options}>{() => <></>}</PrefetchQuery>).toEqualTypeOf<JSX.Element>()
    expectTypeOf(<PrefetchQuery {...options}>{() => <></>}</PrefetchQuery>).not.toEqualTypeOf<ReactNode>()
  })
})
