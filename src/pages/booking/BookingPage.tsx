import { LinkBox, LinkOverlay, VStack} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {RouteParams} from "@/types/types.ts";

export function BookingPage() {
    const {brand , brandLocation,carCondition,car } = useParams<RouteParams>();

    return (<>
    <VStack>
        Booking Page
        <LinkBox>
            <LinkOverlay href={`/${brand}/${brandLocation}/${carCondition}/${car}/form`}>GO To FORM</LinkOverlay>
        </LinkBox>
    </VStack>
    </>)
}