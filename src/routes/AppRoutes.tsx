
import {Route, Routes} from "react-router-dom";
import {HomePage} from "@/pages/home/HomePage.tsx";
import {CarCondition} from "@/pages/car-condition/CarCondition.tsx";
import {BrandLocation} from "@/pages/brand-location/BrandLocation.tsx";
import {CarsPage} from "@/pages/cars/CarsPage.tsx";
import {BookingPage} from "@/pages/booking/BookingPage.tsx";
import {FormPage} from "@/pages/form/FormPage.tsx";

export function AppRoutes(){
    return(<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:brand" element={<BrandLocation />}/>
            <Route path="/:brand/:brandLocation" element={<CarCondition />}/>
            <Route path="/:brand/:brandLocation/:carCondition" element={<CarsPage />}/>
            <Route path="/:brand/:brandLocation/:carCondition/:car" element={<BookingPage />}/>
            <Route path="/:brand/:brandLocation/:carCondition/:car/form" element={<FormPage />}/>
            <Route path="/:brand/:brandLocation/:carCondition/:car/form?status" element={<FormPage />}/>

        </Routes>
    </>)
}