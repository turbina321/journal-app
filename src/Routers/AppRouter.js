import React from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path="/auth/*" 
                    element={
                      
                            <AuthRouter/>
                }/>
                <Route
                    path="/home/*"
                    element={
                            <DashboardRoutes/>
                    }
                />
                
            </Routes>
        </BrowserRouter>
        
    )
}
