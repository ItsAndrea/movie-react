import { MoviesGrid } from "../MoviesGrid";

export function App(){
    return(
        <div> 
            <header>
                <h1 className="title">Movies</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </div>
    );
}