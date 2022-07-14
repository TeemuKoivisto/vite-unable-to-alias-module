// import { describe, expect, it } from 'vitest'
import { schema } from '@manuscripts/manuscript-transform'
// const { schema } = await import('@manuscripts/manuscript-transform')
import { Node as PMNode, Schema } from 'prosemirror-model'

import { setupEditor } from './setupEditor'

import defaultDoc from './default-doc.json'

describe('test which loads the same module with different versions', () => {
  it('should alias them as defined in vite.config.js', async () => {
    setupEditor({
      doc: defaultDoc,
      schema: schema as unknown as Schema,
    })
      .insertNode(schema.nodes.table_element.createAndFill() as unknown as PMNode, 11)

    expect(true).toBe(true)
  })
})
