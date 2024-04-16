import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Hr from './Hr'
import { toJson } from './utils'

test('Add class name to the component', () => {
  const component = renderer.create(<Hr className="test-class" />)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Render simple separator', () => {
  const component = renderer.create(<Hr />)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Render separator with text in the beginning', () => {
  const component = renderer.create(<Hr text="We begin here" />)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Render separator with text at the end', () => {
  const component = renderer.create(<Hr text="We end there" textOrientation="end" />)
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
