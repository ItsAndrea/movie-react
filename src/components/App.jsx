import { MoviesGrid } from "./MoviesGrid";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { MovieDetails } from "../pages/MovieDetails";
import { LandingPage } from "../pages/LandingPage";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/"><h1 className="title">Movies</h1> </Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/movies/" element={ <MovieDetails /> }>      
                    </Route>
                    <Route path="/" element={ <LandingPage /> }>                        
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}