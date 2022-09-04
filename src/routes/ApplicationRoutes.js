import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from '../views/Home';

const MovieDetail = lazy(() => import(/* webpackChunkName: "[movieDetail]"*/'../views/MovieDetail'));

const ApplicationRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:movieId' element={<MovieDetail />} />
            </Routes>
        </Suspense>
    );
}

export default ApplicationRoutes;