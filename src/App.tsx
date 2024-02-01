import ResumeEditor from './views/ResumeEditor/ResumeEditorDisplay.tsx'
import ResumeTemplates from './views/template/ResumeTemplate.tsx'
import {  Route,Routes } from "react-router-dom";
import ViewC from '../src/templates/Cmode/view/index.tsx'
import ViewD from '../src/templates/Dmode/view/index.tsx'
import Home from "./views/home/Home.tsx";



function App() {


  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeEditor />} />
          <Route path="/resumeTemplates" element={<ResumeTemplates />} />
          <Route path="/resumeTemplatesUrlC" element={<ViewC />} />
          <Route path="/resumeTemplatesUrlD" element={<ViewD />} />
      </Routes>
  )
}

export default App
