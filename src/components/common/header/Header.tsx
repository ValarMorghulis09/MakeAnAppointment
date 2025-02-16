import {Button, HStack} from "@chakra-ui/react";
import {useColorMode} from "@/components/ui/color-mode.tsx";

export function Header(){
    const { toggleColorMode,colorMode } = useColorMode()

    return(<header >
    <HStack className={'header-container'} direction="row" justify="space-between">
        <div>
            Header
        </div>
        <Button style={{textTransform:"capitalize"}} variant="solid" onClick={toggleColorMode}>
            {colorMode}
        </Button>
    </HStack>
    </header>)
}