import test from 'tape'
import Model from '../model/Model'

test('Model', (t) => {
  let model = new Model()
  t.ok(typeof model.board === 'object', 'Model has a board object')
  t.ok(typeof model.robot === 'object', 'Model has a robot object')
})
