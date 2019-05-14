/**
 * Get all components in all sections
 *
 * @param {array} sections
 */
export default function getComponentsFromSections(sections) {
	return sections.reduce((allComponent, section) => {
		let sectionComponents = []
		let subSectionComponents = []
		if (section.components) {
			sectionComponents = section.components
		}
		if (section.sections) {
			subSectionComponents = getComponentsFromSections(section.sections)
		}
		return [...allComponent, ...sectionComponents, ...subSectionComponents]
	}, [])
}
