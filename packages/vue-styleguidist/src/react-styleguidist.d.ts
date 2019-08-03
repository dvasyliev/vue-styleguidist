declare module 'react-styleguidist/lib/loaders/utils/getNameFromFilePath' {
	const getNameFromFilePath: (input: string) => string
	export = getNameFromFilePath
}

declare module 'react-styleguidist/lib/loaders/utils/requireIt' {
	import * as b from '@babel/types'

	const requireIt: (input: string) => { require: string; toAST: () => b.Node } | any
	export = requireIt
}

declare module 'react-styleguidist/lib/loaders/utils/slugger' {
	const slugger: { slug: (input: string) => string }
	export = slugger
}

declare module 'react-styleguidist/lib/loaders/utils/getComponentFiles' {
	const getComponentFiles: (
		components: string | string[] | undefined,
		configDir: string,
		ignore: string[]
	) => string[]
	export = getComponentFiles
}

// client

declare module 'react-styleguidist/lib/client/utils/getRouteData' {
	// in order to avoid duplicate declaration errors,
	// we alias each import of sections
	import { ProcessedSection as RouteSection } from 'types/Section'
	import { DISPLAY_MODE as Route_DISPLAY_MODE } from 'types/enums'

	const getRouteData: (
		allSections: RouteSection[],
		hash: string,
		pagePerSection?: boolean
	) => {
		sections: RouteSection[]
		displayMode: Route_DISPLAY_MODE
	}
	export default getRouteData
}

declare module 'react-styleguidist/lib/client/utils/getPageTitle' {
	import { ProcessedSection as TitleSection } from 'types/Section'
	import { DISPLAY_MODE as Title_DISPLAY_MODE } from 'types/enums'

	const getPageTitle: (
		sections: TitleSection[],
		title?: string,
		displayMode?: Title_DISPLAY_MODE
	) => string
	export default getPageTitle
}

// components

declare module 'rsg-components/StyleGuide' {
	import { FunctionComponent } from 'react'
	import { StyleGuidistConfigObject as StyleGuideStyleGuidistConfigObject } from 'types/StyleGuide'
	import { ProcessedSection as StyleGuideSection } from 'types/Section'
	import { DISPLAY_MODE as StyleGuide_DISPLAY_MODE } from 'types/enums'

	const StyleGuide: FunctionComponent<{
		codeRevision: number
		config: StyleGuideStyleGuidistConfigObject
		slots: any
		welcomeScreen: any
		patterns: any[]
		sections: StyleGuideSection[]
		allSections: StyleGuideSection[]
		displayMode: StyleGuide_DISPLAY_MODE
		pagePerSection: any
	}>
	export default StyleGuide
}

declare module 'rsg-components/slots' {
	import { StyleGuidistConfigObject as slotsStyleGuidistConfigObject } from 'types/StyleGuide'

	const slots: (config?: slotsStyleGuidistConfigObject) => any
	export default slots
}

declare module 'lru-cache' {
	class LRUCache {
		constructor(num: number)
		get(key: string): any
		set(key: string, obj: any): void
	}
	export = LRUCache
}

declare module 'hash-sum' {
	function makehashvsg(key: any): string
	export = makehashvsg
}
