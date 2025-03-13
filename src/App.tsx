import './App.css';
import TagInput from './components/TagInput';

function App() {
  return (
    <div className="App">
      <TagInput maxTags={5} separators={[",", ";", "|", " ","R","\t"]} />
    </div>
  );
}

export default App;
