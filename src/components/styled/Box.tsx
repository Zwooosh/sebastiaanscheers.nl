import styled, { Theme } from '@/theme'
import {
  space,
  color,
  layout,
  flexbox,
  compose,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { css, SystemStyleObject } from '@styled-system/css'

type BoxProps = React.RefAttributes<any> &
  React.HTMLAttributes<any> &
  SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps

export interface IBoxProps extends BoxProps {
  sx?: SystemStyleObject
}

const sx = (props: { sx: SystemStyleObject; theme: Theme }) =>
  css(props.sx)(props.theme)
export const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  sx,
  compose(space, color, layout, flexbox)
)
Box.displayName = 'Box'

export const Flex = styled(Box)({
  display: 'flex',
})
Flex.displayName = 'Flex'