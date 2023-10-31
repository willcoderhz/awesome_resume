import ResumeEditor from './pages/ResumeEditor/structures/ResumeEditorDisplay.tsx'
import {  Route,Routes } from "react-router-dom";


import Home from "./views/home/Home.tsx";



function App() {


  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeEditor />} />
      </Routes>



    // <>
    //   <ResumeEditor/>
    //   {/*测试 tailwindcss 可以去掉 */}
    //   {/*<h1 className="text-3xl font-bold underline">asdfafa</h1>*/}
    // </>
  )
}

export default App
