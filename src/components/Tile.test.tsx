import { toJson } from '@/utils/toJson'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Tile from './Tile'

test('Tile', () => {
  const component = renderer.create(<Tile title="Test Title">Tile</Tile>)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Tile with badge', () => {
  const component = renderer.create(
    <Tile title="Test Title" badge={<span />}>
      Tile with badge
    </Tile>
  )
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
