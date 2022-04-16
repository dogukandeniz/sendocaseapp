
import './App.css';
import SearchInput from './_components/SearchInput/search.input'
import SearchResult from './_components/SearchResult/search.result'


function App() {
  return (
    <div className="App">
     <SearchInput   id="search-input"
                    value=""
                    placeholder="SEARCH(Client Name / Policy Number)"
     />
        <SearchResult/>
    </div>
  );
}

export default App;
