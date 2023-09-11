"use client";
import React from "react";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,

} from '@chakra-ui/react'

import {
    HamburgerIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
} from '@chakra-ui/icons'

import { Avatar, Wrap, WrapItem, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
export default function Navuser() {
    return(
        <div className="flex items-center justify-between p-4 z-20">
            <Wrap>
                <WrapItem>
                    <Avatar
                        size='md'
                        name='Kola Tioluwani'
                        src='https://bit.ly/tioluwani-kolawole'
                    />{' '}
                </WrapItem>
            </Wrap>

            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                        Nuevo producto
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        Productos
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        Perfil
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}