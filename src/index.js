import "./styles.scss";

const allFilms = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');
        const object = await response.json();
        return object.results[0]
    } catch (error) {
        console.error("error : ", error)
    }
}