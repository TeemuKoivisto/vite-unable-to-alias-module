
import { exampleSetup } from 'prosemirror-example-setup'
import { Node as PMNode, Schema } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

import { trackChangesPlugin } from '@manuscripts/track-changes-plugin'

interface SetupEditorOptions {
  doc: Record<string, any> | undefined
  schema: Schema
}

export function setupEditor(opts: SetupEditorOptions) {
  const { doc, schema } = opts
  const pmDoc = schema.nodeFromJSON(doc)
  const div = document.createElement('div')
  document.body.append(div)
  const view = new EditorView(div, {
    state: EditorState.create({
      doc: pmDoc,
      plugins: exampleSetup({ schema: schema }).concat(trackChangesPlugin()),
    }),
  })
  return {
    view,
    insertNode(node: PMNode | null | undefined, pos?: number) {
      if (!node) {
        throw Error('No PMNode provided for insertNode!')
      }
      const { selection, tr } = view.state
      tr.insert(pos ?? selection.head, node)
      view.dispatch(tr)
      return this
    }
  }
}