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

export interface Body {
    _key: string;
    _type: string;
    children: string[];
    markDefs: any[];
    style: string;
}

export interface Post {
    _id: string;
    author: Author;
    mainImage: MainImage;
    body: Body;
    name: string;
    slug: string;
    title: string;
}
