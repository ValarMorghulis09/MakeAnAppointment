import {Breadcrumb} from "@chakra-ui/react"
import {LuCar, LuHouse} from "react-icons/lu"
import {useLocation} from "react-router-dom";
import {Fragment} from "react";

export function AppBreadCrumb() {

    const location = useLocation();
    const pathNames = location.pathname.split("/").filter(Boolean);

    return (<Breadcrumb.Root>
        {pathNames.length > 0 && <Breadcrumb.List key={"breadcrumb-list"}>
            <Breadcrumb.Item key="0-home">
                <Breadcrumb.Link key="0-link" href="/">
                    <LuHouse/>
                    Home
                </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator key="home-seperator"/>
            {pathNames.map((value, index) => {
                const path = `/${pathNames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathNames.length - 1; // Check if this is the last breadcrumb
                return <Fragment key={index}>
                    <Breadcrumb.Item key={index + "-" + value}>
                        {isLast ? <Breadcrumb.CurrentLink key={index + "-current-link"}>
                                {value}
                            </Breadcrumb.CurrentLink> :
                            <Breadcrumb.Link key={value + "-link"} href={path}>
                                <LuCar/>
                                {value}
                            </Breadcrumb.Link>
                        }

                    </Breadcrumb.Item>
                    {!isLast && <Breadcrumb.Separator key={value + "-separator"}/>}
                </Fragment>
            })}

        </Breadcrumb.List>}

    </Breadcrumb.Root>)
}