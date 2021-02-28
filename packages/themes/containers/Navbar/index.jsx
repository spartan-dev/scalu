import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-scroll"
import { smoothLinkProps } from "@pagerland/common/utils"

import Container from "@pagerland/common/components/Container"
import Box from "@pagerland/common/components/Box"
import List from "@pagerland/common/components/List"
import NavbarWrapper from "@pagerland/common/components/Navbar"
import Button from "@pagerland/common/components/Button"

import LanderPagerLogo from "@pagerland/icons/Logo"

import data from "../../data"
import {
  LogoWrapper,
  MobileWrapper,
  NavbarLink,
  ToggleButton,
  Wrapper,
} from "./styled.components"
import { zIndex } from "../../styles"

const Navbar = ({
  WrapperProps,
  ContainerProps,
  MenuItemsListProps,
  LogoProps,
  LinksWrapperProps,
  LinkProps,
  ToggleButtonProps,
  MobileMenuProps,
  MobileMenuToggleProps,
  Logo,
  links,
  ButtonProps,
  actions,
}) => {
  const menu = onClick => (
    <>
      {links && (
        <List {...LinksWrapperProps}>
          {links.map(({ label, ...link }, i) => (
            <List.Item key={i}>
              <NavbarLink {...LinkProps} onClick={onClick} {...link}>
                {label}
              </NavbarLink>
            </List.Item>
          ))}
        </List>
      )}
    </>
  )

  return (
    <NavbarWrapper
      rwdMenu={({ onToggle, isOpen, onClose }) => (
        <MobileWrapper isActive={isOpen} {...MobileMenuProps}>
          <ToggleButton
            isActive={isOpen}
            toggleButton={onToggle}
            {...MobileMenuToggleProps}
          />
          {menu(onClose)}
          <Button {...ButtonProps} {...actions} onClick={onClose}>
            {actions.label}
          </Button>
        </MobileWrapper>
      )}
    >
      {({ onToggle, isOpen, onClose }) => (
        <Wrapper {...WrapperProps}>
          <Container {...ContainerProps}>
            <Box flexBox alignItems="center">
              {Logo && (
                <LogoWrapper {...LogoProps}>
                  <Logo />
                </LogoWrapper>
              )}
              <Box {...MenuItemsListProps}>{menu(onClose)}</Box>
              <ToggleButton
                isActive={isOpen}
                toggleButton={onToggle}
                {...ToggleButtonProps}
              />
            </Box>
          </Container>
        </Wrapper>
      )}
    </NavbarWrapper>
  )
}

Navbar.propTypes = {
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  MenuItemsListProps: PropTypes.object,
  LinksWrapperProps: PropTypes.object,
  LinkProps: PropTypes.object,
  LogoProps: PropTypes.object,
  ActionsWrapperProps: PropTypes.object,
  ActionProps: PropTypes.object,
  ToggleButtonProps: PropTypes.object,
  MobileMenuProps: PropTypes.object,
  MobileMenuToggleProps: PropTypes.object,
  ButtonProps: PropTypes.object,
  Logo: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    })
  ),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    })
  ),
}

Navbar.defaultProps = {
  WrapperProps: {
    stickyBgColor: "gray.7",
  },
  ContainerProps: {
    py: 3,
  },
  MenuItemsListProps: {
    display: {
      _: "none",
      lg: "flex",
    },
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  LogoProps: {
    as: Link,
    to: "",
    ...smoothLinkProps,
    mx: {
      _: "auto",
      md: "0",
    },
  },
  LinksWrapperProps: {
    display: "flex",
    flexDirection: {
      _: "column",
      lg: "row",
    },
    alignItems: "center",
  },
  LinkProps: {
    mx: {
      _: 0,
      lg: 3,
    },
    mb: {
      _: 4,
      lg: 0,
    },
    color: "gray.2",
    as: Link,
    activeColor: "primary",
    ...smoothLinkProps,
  },
  ActionsWrapperProps: {
    mt: {
      _: 2,
      lg: 0,
    },
    ml: {
      _: 0,
      lg: "auto",
    },
  },
  ActionProps: {
    variant: "primary",
    as: "a",
  },
  ToggleButtonProps: {
    buttonWidth: 24,
    position: "absolute",
    padding: 0,
    right: 4,
    top: "24px",
    color: "gray.0",
    display: {
      lg: "none",
    },
  },
  MobileMenuProps: {
    display: {
      _: "flex",
      lg: "none",
    },
    position: "fixed",
    backgroundColor: "gray.7",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: zIndex.menuNav,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingTop: 146,
  },
  MobileMenuToggleProps: {
    buttonWidth: 24,
    color: "gray.0",
    position: "absolute",
    padding: 0,
    right: 4,
    top: "24px",
  },
  ButtonProps: {
    variant: "primary",
    size: "small",
  },
  Logo: LanderPagerLogo,
  links: data.navbar.links,
  actions: data.navbar.actions,
}

export default Navbar
