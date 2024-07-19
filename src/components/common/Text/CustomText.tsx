import styled from '@emotion/native';
import { css } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import { Text as RNText, type TextProps } from 'react-native';
import { match } from 'ts-pattern';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

const E = {
  Text: styled(RNText)<{ $customStyle: string }>`
    ${({ $customStyle }) => $customStyle};
  `,
};

export function CustomText({
  children,
  type = 'default',
  ...rest
}: PropsWithChildren<ThemedTextProps>) {
  const textStyle = match(type)
    .with('title', () => CSS.Title)
    .with('defaultSemiBold', () => CSS.DefaultSemiBold)
    .with('subtitle', () => CSS.Subtitle)
    .with('link', () => CSS.Link)
    .otherwise(() => CSS.Default);

  const customStyle = textStyle.styles;

  return (
    <E.Text
      $customStyle={customStyle}
      {...rest}>
      {children}
    </E.Text>
  );
}

const CSS = {
  Default: css`
    font-size: 14px;
    font-weight: normal;
  `,
  Title: css`
    font-size: 24px;
    font-weight: bold;
  `,
  DefaultSemiBold: css`
    font-size: 14px;
    font-weight: 600;
  `,
  Subtitle: css`
    font-size: 18px;
    font-weight: normal;
  `,
  Link: css`
    font-size: 14px;
    font-weight: normal;
    color: blue;
    text-decoration: underline;
  `,
};
