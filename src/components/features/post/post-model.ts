export type IPost = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export interface PostResponse {
	userId: number;
	id: number;
	title: string;
	body: string;
}