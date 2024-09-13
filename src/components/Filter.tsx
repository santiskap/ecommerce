import {
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
    Button,
} from '@chakra-ui/react'

export default function Filter() {
return(
    <div className="grid place-content-end bg-white z-30 mb-10">
    <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='blue'>
            Filtro
        </MenuButton>
        <MenuList className="bg-white" minWidth='240px'>
            <MenuOptionGroup defaultValue='asc' title='Ordenar' type='radio'>
                <MenuItemOption value='asc'>Ascendente</MenuItemOption>
                <MenuItemOption value='desc'>Descendiente</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup className="bg-white" title='Categoria' type='checkbox'>
                <MenuItemOption value='email'>Smartphones</MenuItemOption>
                <MenuItemOption value='phone'>Laptops</MenuItemOption>
                <MenuItemOption value='country'>Perfumes</MenuItemOption>
            </MenuOptionGroup>
        </MenuList>
    </Menu>
    </div>
)
}