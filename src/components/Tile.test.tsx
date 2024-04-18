import { toJson } from '@/utils/toJson'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Tile from './Tile'

test('Tile', () => {
  const component = renderer.create(
    <Tile title="Test Title" subTitle="Test Subtitle">
      Tile
    </Tile>
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Tile with class name', () => {
  const component = renderer.create(
    <Tile title="Test Title" subTitle="Test Subtitle" className="test-class">
      Tile with class name
    </Tile>
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
