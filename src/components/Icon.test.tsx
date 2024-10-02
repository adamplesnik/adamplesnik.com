import { toJson } from '@/utils/toJson'
import { Cog } from 'lucide-react'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Icon from './Icon'

test('Icon', () => {
  const component = renderer.create(<Icon Icon={Cog} />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Icon with class name', () => {
  const component = renderer.create(<Icon Icon={Cog} className="test" />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
