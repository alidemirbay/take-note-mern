import { Route, Switch, Link } from 'react-router-dom'
import { NoteList } from './components/TodoList'
import { CreateNote } from './components/CreateTodo'
import { EditNote } from './components/EditTodo'


function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={NoteList} />
        <Route path="/edit/:id" component={EditNote} />
        <Route path="/create" component={CreateNote} />
      </Switch>
    </div>
  );
}

export default App;
