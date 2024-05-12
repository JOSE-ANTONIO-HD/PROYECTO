import React from 'react';
import {Routes, Route} from "react-router-dom";
import {AdminLayouts} from "../layout";
import {Auth, Users, Materias} from "../pages/admin";
import {useAuth} from "../hooks";
import { User } from '../api';

//const user={username:"jose"};
//const user=null;

export function AdminRouter() {

    const {user}=useAuth();
    
    const LoadLayout=(Layout, Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
    return (
        <Routes>
            {
                !user ? (
            <Route exact path='/admin/*' element={<Auth/>}/> 
                ):(
                    <>
                    {["/admin", "/admin/users"].map((path)=>(
                    <Route key={path} exact path={path} element={LoadLayout(AdminLayouts,Users)}/> 
                    ))}
                    <Route exact path="/admin/Materias" element={LoadLayout(AdminLayouts,Materias)}/> 

                    </>
                )
            }
        </Routes>
    )
}
