import ResumeEditor from './views/ResumeEditor/ResumeEditorDisplay.tsx'
import ResumeTemplates from './views/template/ResumeTemplate.tsx'
import {  Route,Routes } from "react-router-dom";
import View from '../src/templates/Cmode/view/index.tsx'

import Home from "./views/home/Home.tsx";



function App() {


  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeEditor />} />
          <Route path="/resumeTemplates" element={<ResumeTemplates />} />
          <Route path="/resumeTemplatesUrl" element={<View />} />
      </Routes>



    // <>
    //   <ResumeEditor/>
    //   {/*测试 tailwindcss 可以去掉 */}
    //   {/*<h1 className="text-3xl font-bold underline">asdfafa</h1>*/}
    // </>
  )
}

export default App
