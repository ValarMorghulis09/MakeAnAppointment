import {Grid, GridItem, LinkBox, LinkOverlay} from "@chakra-ui/react";


export function HomePage(){
    return (
        <Grid templateColumns={"repeat(2, 1fr)"} gap="6">
        <GridItem h={"20"}>
            <LinkBox>
                <LinkOverlay href={"/brand1"}>Brand 1</LinkOverlay>
            </LinkBox>
        </GridItem>
            <GridItem>
                <LinkBox>
                    <LinkOverlay href={"/brand2"}>Brand 2</LinkOverlay>
                </LinkBox>
            </GridItem>
        </Grid>
    )
}