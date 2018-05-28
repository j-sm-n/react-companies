import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  bold: () => ({
    styles: css`
      font-weight: 400;
    `,
  }),
  fontSizeSM: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeSM};
      line-height: calc(${theme.dimensions.fontSizeSM} * 1.25);
    `,
  }),
};

const styles = () => css`
  margin-left: 4px;
  margin-right: 4px;
`;

export default buildStyledComponent('Span', styled.span, styles, { modifiers });
