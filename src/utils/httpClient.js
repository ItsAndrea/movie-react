const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E1ZWJlYzhiMTJiZGRhMjI5MDAyNWVkZTAzMGYxMiIsInN1YiI6IjYxZWNhZTM4NmQ0Yzk3MDEwM2FiMGZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJqGDJnu85O8GY3Qv5e7WnUXCzKgOTCRHjo8I79ejAI",
            "Content-Type":
                "application/json;charset=utf-8"
        },
    })
        .then((result) => result.json())
}