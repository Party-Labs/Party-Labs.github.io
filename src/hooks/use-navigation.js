import { useStaticQuery, graphql } from 'gatsby';

export const useNavigation = () => {
  const {
    allMdx: { nodes: mdx },
    allPagesJson: { nodes: json }
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { type: { eq: "page" } } }, sort: { fields: { slug: ASC } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            icon
          }
        }
      }
      allPagesJson {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            icon
          }
        }
      }
    }
  `);

  const linkData = [
    /* {
      url: 'https://x.com/z0rs_',
      title: 'X',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      rel: 'me'
    },
    {
      url: 'https://github.com/z0rs',
      title: 'GitHub',
      icon: 'M11.88,0.6C5.5,0.6,0.3,5.8,0.3,12.18c0,5.44,3.78,10.05,8.86,11.23c0-0.12-0.12-0.35-0.12-0.59V20.8c-0.47,0-1.3,0-1.42,0c-0.83,0-1.54-0.35-1.89-0.95c-0.35-0.71-0.47-1.77-1.42-2.48C4.08,17.14,4.2,16.9,4.55,16.9c0.59,0.12,1.06,0.59,1.54,1.18c0.47,0.59,0.71,0.71,1.54,0.71c0.47,0,1.06,0,1.65-0.12c0.35-0.83,0.83-1.54,1.54-1.89c-3.9-0.35-5.67-2.36-5.67-4.96c0-1.18,0.47-2.25,1.3-3.19c-0.35-0.59-0.71-2.48,0-3.19c1.77,0,2.84,1.18,3.07,1.42c0.83-0.35,1.77-0.47,2.84-0.47s2.01,0.12,2.84,0.47c0.24-0.35,1.3-1.42,3.07-1.42c0.71,0.71,0.35,2.6,0.12,3.55c0.83,0.95,1.3,2.01,1.3,3.07c0,2.6-1.89,4.49-5.67,4.96c1.06,0.59,1.89,2.13,1.89,3.31v2.6c0,0.12,0,0.12,0,0.24c4.49-1.54,7.8-5.91,7.8-10.99C23.46,5.8,18.26,0.6,11.88,0.6z',
      rel: 'me'
    }, */
    {
      url: 'https://linkedin.com/in/0x3n0',
      title: 'LinkedIn',
      icon: 'M21.4,0.64H2.72c-1.14,0-2.02,0.88-2.02,2.02v18.55c0,1.26,0.88,2.15,2.02,2.15h18.55c1.14,0,2.02-0.88,2.02-2.02V2.66C23.42,1.52,22.53,0.64,21.4,0.64z M7.89,19.19H4.86V9.48h3.03C7.89,9.48,7.89,19.19,7.89,19.19z M6.38,8.09c-1.01,0-1.77-0.76-1.77-1.77s0.76-1.89,1.77-1.89s1.77,0.76,1.77,1.77S7.26,8.09,6.38,8.09z M19.25,19.19h-3.03v-4.67c0-1.14,0-2.65-1.64-2.65s-1.77,1.26-1.77,2.52v4.8H9.79V9.48h2.9v1.26l0,0c0.38-0.76,1.39-1.64,2.9-1.64c3.03,0,3.66,2.02,3.66,4.67C19.25,13.89,19.25,19.19,19.25,19.19z',
      rel: ''
    },
    {
      url: 'mailto:root.partylabs@gmail.com',
      title: 'Email',
      icon: 'M2.35,3.18c-0.95,0-1.79,0.83-1.79,1.79v14.06c0,0.95,0.83,1.79,1.79,1.79h19.31c0.95,0,1.79-0.83,1.79-1.79V4.97c0-0.95-0.83-1.79-1.79-1.79h1.07H2.35z M4.73,4.97h14.54L12,10.33L4.73,4.97z M3.18,7.11L12,13.55l8.82-6.44v11.92H3.18V7.11z',
      rel: ''
    }
  ];

  return {
    pages: [...mdx, ...json],
    links: linkData
  };
};
