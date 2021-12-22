import {
  buildClientSchema,
  buildSchema,
  findBreakingChanges,
  findDangerousChanges,
  getIntrospectionQuery
} from 'graphql/utilities'
import fetch from 'node-fetch'

export async function findSchemaDiff (
  endpoint,
  headers,
  path
) {
  const response = await fetch(endpoint, {
    body: JSON.stringify({ query: getIntrospectionQuery() }),
    headers,
    method: 'POST'
  })
  const { data, errors } = await response.json()
  if (errors) {
    throw new Error(JSON.stringify(errors, null, 2))
  }
  const schema = await buildClientSchema(data)

  const buildExpectedSchema = buildSchema(path)
  return {
    breakingChanges: findBreakingChanges(schema, buildExpectedSchema),
    dangerousChanges: findDangerousChanges(schema, buildExpectedSchema)
  }
}
