
import {useParams} from "react-router-dom";
import {Grid, GridItem, LinkBox, LinkOverlay} from "@chakra-ui/react";
export function CarCondition() {
    const { brand,brandLocation } = useParams();

    return(<>
        {brand} at {brandLocation}
        <Grid templateColumns={"repeat(2, 1fr)"} gap="6">
            <GridItem h={"20"}>
                <LinkBox>
                    <LinkOverlay href={`/${brand}/${brandLocation}/new`}>New</LinkOverlay>
                </LinkBox>
            </GridItem>
            <GridItem>
                <LinkBox>
                    <LinkOverlay href={`/${brand}/${brandLocation}/used`}>used</LinkOverlay>
                </LinkBox>
            </GridItem>
        </Grid>

    </>)
}