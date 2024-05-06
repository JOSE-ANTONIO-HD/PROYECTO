import React from 'react';
import {Routes, Route} from "react-router-dom";
import {AdminLayouts} from "../layout";
import {Auth, Users} from "../pages/admin";

export function AdminRouter() {
    const LoadLayout=(Layout, Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
    return (
        <Routes>
            <Route exact path='/admin/' element={LoadLayout(AdminLayouts,Auth)}/> 
            <Route exact path='/admin/users' element={LoadLayout(AdminLayouts,Users)}/> 
        </Routes>
    )
}
