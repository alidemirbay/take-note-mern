import { Route, Link, Routes } from 'react-router-dom'
import { NoteList } from './components/NoteList'
import { CreateNote } from './components/CreateNote'
import { EditNote } from './components/EditNote'


function App() {
  return (
    <div>
      <nav className="navbar bg-success navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Notes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Note</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<NoteList />} />
        <Route path="/edit/:id" element={<EditNote />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </div>
  );
}

export default App;
