import { TypedObject } from "@sanity/types/dist/dts";
export interface Author {
    name: string;
    picture?: any;
}

export interface MainImage {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

// export interface Body {
//     _key: string;
//     _type: string;
//     children: string[];
//     markDefs: any[];
//     style: string;
// }

export type Body = TypedObject | TypedObject[];

export interface Post {
    _id: string;
    author: Author;
    mainImage: MainImage;
    excerpt: string;
    body: Body;
    name: string;
    slug: string;
    title: string;
}

export interface PostSlugQuery {
    post: Post;
    morePosts: Post[];
}
