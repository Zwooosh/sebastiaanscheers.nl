import React from 'react'
import { Link } from 'rebass'
import { IconType } from 'react-icons/lib'

import styled from '@/theme'

interface IProps {
  icon: IconType
  href: string
}

const stripUrl = (url: string) => url.replace(/^(https?:\/\/)/, '')

const SocialLink = ({ icon: Icon, href }: IProps) => {
  return (
    <PopupLink
      variant="nav"
      data-title={stripUrl(href)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      fontSize="xl"
    >
      <Icon />
    </PopupLink>
  )
}

export default SocialLink

const PopupLink = styled(Link)`
  position: relative;

  &:hover {
    &:before {
      opacity: 1;
      transform: translate3d(-50%, 0, 0);
      white-space: nowrap;
    }
  }

  &:before {
    content: attr(data-title);
    display: inline-block;
    position: absolute;
    bottom: -${({ theme }) => theme.sizes[8]};
    left: 50%;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => theme.sizes[2]};
    background-color: ${({ theme }) => theme.colors.backgroundAccent};
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radii.sm};
    opacity: 0;
    transition: opacity 150ms linear, transform 150ms linear;
    transform: translate3d(-50%, -${({ theme }) => theme.sizes[2]}, 0);
    z-index: ${({ theme }) => theme.zIndices.absolute};
  }
`
