export type Item = {
	id: string;
	title: string;
	description: string;
	uploadDate: string;
	size: string;
	url: string;
};

export type DocTags = {
	[x: string]: string[];
};

export type TagsRecord = {
	tags: string[];
	linkedDocs: DocTags;
};
