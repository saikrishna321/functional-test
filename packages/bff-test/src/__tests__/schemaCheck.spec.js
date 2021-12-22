import { findSchemaDiff } from '../index'
import { expect } from 'chai'

const fs = require('fs')
const path = require('path')

it('Should return empty breakingChanges array when no schema diff found', async () => {
  const expectedSchema = fs.readFileSync(
    path.join(__dirname, '../schema', 'expectedSchema.graphql'),
    'utf8'
  )
  const { breakingChanges } = await findSchemaDiff(
    process.env.URLLL || 'https://snowtooth.moonhighway.com/graphql',
    {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    expectedSchema
  )
  expect(breakingChanges).to.be.empty
})

it('Should return  breakingChanges array when schema diff found', async () => {
  const expectedSchema = fs.readFileSync(
    path.join(__dirname, '../schema', 'breakingChangeSchema.graphql'),
    'utf8'
  )
  const { breakingChanges, dangerousChanges } = await findSchemaDiff(
    process.env.URL || 'https://snowtooth.moonhighway.com/graphql',
    {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    expectedSchema
  )
  expect(breakingChanges[0]).to.deep.equal({
    type: 'FIELD_CHANGED_KIND',
    description: 'Lift.capacity changed type from Int! to String!.'
  })

  expect(dangerousChanges[0]).to.deep.equal({
    type: 'VALUE_ADDED_TO_ENUM',
    description: 'PLANNED was added to enum type TrailStatus.'
  })
})
