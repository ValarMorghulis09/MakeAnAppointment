import {Grid, GridItem, LinkBox, LinkOverlay} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {RouteParams} from "@/types/types.ts";

export function CarsPage(){
    const {brand , brandLocation,carCondition } = useParams<RouteParams>();
    return(<>
        <Grid templateColumns={"repeat(2, 1fr)"} gap="6">
            <GridItem h={"20"}>
                <LinkBox>
                    <LinkOverlay href={`/${brand}/${brandLocation}/${carCondition}/car1`}>Car 1</LinkOverlay>
                </LinkBox>
            </GridItem>
            <GridItem>
                <LinkBox>
                    <LinkOverlay href={`/${brand}/${brandLocation}/${carCondition}/car2`}>car 2</LinkOverlay>
                </LinkBox>
            </GridItem>
        </Grid>
    </>)
}