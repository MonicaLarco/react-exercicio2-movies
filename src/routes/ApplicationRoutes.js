import { Routes, Route } from "react-router-dom";
import { Home } from '../views/Home';
import { MovieDetail } from '../views/MovieDetail';

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:movieId' element={<MovieDetail />} />
        </Routes>
    );
}

export default ApplicationRoutes;