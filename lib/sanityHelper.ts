import imageUrlBuilder from "@sanity/image-url";
import sanity from "./sanity";
import { MainImage } from "./types";

export const imageBuilder = imageUrlBuilder(sanity);

export const urlForImage = (source: MainImage) =>
    imageBuilder.image(source).auto("format").fit("max");
