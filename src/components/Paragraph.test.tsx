import { toJson } from '@/utils/toJson'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Paragraph from './Paragraph'

test('Small paragraph', () => {
  const component = renderer.create(<Paragraph size="small">Small paragraph</Paragraph>)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Regular paragraph', () => {
  const component = renderer.create(<Paragraph size="regular">Regular paragraph</Paragraph>)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Large paragraph', () => {
  const component = renderer.create(<Paragraph size="large">Large paragraph</Paragraph>)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Regular paragraph with class name', () => {
  const component = renderer.create(
    <Paragraph size="regular" className="test-class">
      Regular paragraph with class name
    </Paragraph>
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
