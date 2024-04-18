import { toJson } from '@/utils/toJson'
import { Cog } from 'lucide-react'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Link from './Link'

test('Link with href', () => {
  const component = renderer.create(<Link href="url/">link</Link>)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Link with href and custom target', () => {
  const component = renderer.create(
    <Link href="url/" target="_self">
      link
    </Link>
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Link with href, custom target and icon', () => {
  const component = renderer.create(
    <Link href="url/" target="_self" Icon={Cog}>
      link
    </Link>
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
