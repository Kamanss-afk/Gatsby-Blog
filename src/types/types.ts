import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type {	ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  image: {
    gatsbyImageData: IGatsbyImageData;
    resize: {
      src: string;
    };
  };
};