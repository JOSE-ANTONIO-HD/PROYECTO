import React from 'react'
import {Routes, Route} from "react-router-dom";
import {clienteLayouts} from "../layout";
import {Home} from "../pages/web";

export function WebRouter() {
    const LoadLayout=(Layout, Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
}
return (
    <Routes>
    <Route exact path='/' element={LoadLayout(clienteLayouts,Home)}/> 

</Routes>
  )
}