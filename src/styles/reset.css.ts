/* stylelint-disable */
/* http://meyerweb.com/eric/tools/css/reset/
// v2.0 | 20110126
// License: none (public domain)
*/

import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, dialog, audio, video', {
  width: 'initial',
  height: 'initial',
  padding: 0,
  margin: 0,
  font: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
  border: 0,
});

/* HTML5 display-role reset for older browsers */
globalStyle('article, aside, details, dialog, figcaption, figure, footer, header, hgroup, menu, nav, section', {
  display: 'block',
});

globalStyle('body', {
  lineHeight: 1,
});

globalStyle('ol, ul, li', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote::before, blockquote::after, q::before, q::after', {
  content: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});
