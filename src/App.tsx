import { Header } from './components/header/header.component';
import { About } from './components/about/about.component';
import { Skills } from './components/skills/skills.component';
import { Projects } from './components/projects/projects.component';
// import './App.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App
