export enum notifyTypesEnum {
	create = 'create',
	edit = 'edit',
	delete = 'delete',
}

export type notifyTypes = keyof typeof notifyTypesEnum;
