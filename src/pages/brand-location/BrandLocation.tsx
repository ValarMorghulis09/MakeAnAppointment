import {Grid, GridItem, LinkBox, LinkOverlay} from "@chakra-ui/react";
import {useParams} from "react-router-dom";

export function BrandLocation(){
    const {brand} = useParams();
    return (<>
        <Grid templateColumns={"repeat(2, 1fr)"} gap="6">
            <GridItem h={"20"}>
                <LinkBox>
                    <LinkOverlay href={`/${brand}/location1`}>Brand Location 1</LinkOverlay>
                </LinkBox>
            </GridItem>
            <GridItem>
                <LinkBox>
                    <LinkOverlay href={`/${brand}/location2`}>Brand Location 2</LinkOverlay>
                </LinkBox>
            </GridItem>
        </Grid>
    </>)
}