import { SlotDescriptor } from 'vue-docgen-api'
import { mdclean } from './utils'

export default (slots: { [slotName: string]: SlotDescriptor }): string => {
	const slotNames = Object.keys(slots).filter(slotName => slots[slotName].description)
	if (!slotNames.length) {
		return ''
	}
	return `
## Slots

| Name          | Description  | Bindings |
| ------------- | ------------ | -------- |
${slotNames
	.map(slotName => {
		const { description: d, bindings } = slots[slotName]
		const readableBindings = // serialize bindings to display them ina readable manner
			bindings && Object.keys(bindings).length ? JSON.stringify(bindings, null, 2) : ''
		return `| ${mdclean(slotName)} | ${mdclean(d || '')} | ${mdclean(readableBindings)} |` // remplace returns by <br> to allow them in a table cell
	})
	.join('\n')}
`
}
