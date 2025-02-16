import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "@/components/ui/provider"

import {AppRoutes} from "./routes/AppRoutes.tsx";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "@/components/common/footer/Footer.tsx";
import {Header} from "@/components/common/header/Header.tsx";
import {AppBreadCrumb} from "@/components/common/breadcrumb/AppBreadCrumb.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
       <Provider>
           <Header/>
           <AppBreadCrumb/>
            <div style={{minHeight:'90vh',height:"100%"}}>
                <AppRoutes/>
            </div>
           <Footer/>
       </Provider>
   </BrowserRouter>
  </StrictMode>,
)
