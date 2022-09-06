import "./styles.css";
import { connect } from "react-redux";
import { fetchData, fetchDataLocation } from "./store/actions";
import CharacterList from "./components/CharacterList";
import Instructions from "./components/Instructions";
import { useEffect, useRef } from "react";

function App({ loading, characters, fetchData, error }) {
  const inputRef = useRef();

  useEffect(() => {
    fetchData("");
    fetchDataLocation();
  }, []);

  const searchByName = (e) => {
    e.preventDefault();
    fetchData(inputRef.current.value);
    fetchDataLocation(inputRef.current.value);
  };

  return (
    <div className="App">
      <Instructions />

      <form onSubmit={searchByName}>
        <input
          ref={inputRef}
          type="text"
          className="input"
          placeholder="Busca un personaje"
        />
        <button type="submit" className="button">
          Buscar
        </button>
      </form>
      {loading ? (
        <span className="mensaje">loading...</span>
      ) : error ? (
        <span className="mensaje">{error}</span>
      ) : (
        <CharacterList characters={characters} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.first.characters,
    loading: state.first.loading,
    error: state.first.error
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
