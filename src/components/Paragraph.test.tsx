import { toJson } from '@/utils/toJson'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Paragraph from './Paragraph'

test('Regular paragraph', () => {
  const component = renderer.create(<Paragraph>Regular paragraph</Paragraph>)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Regular paragraph with class name', () => {
  const component = renderer.create(
    <Paragraph className="test-class">Paragraph with class name</Paragraph>
  )
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
