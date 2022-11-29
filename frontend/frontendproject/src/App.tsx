import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeachersManagement from "./pages/TeachersManagement/TeachersManagement";
import CoutrsesManagmen from "./pages/CoursesManagement/CoursesManagement";
import StudentsManagement from "./pages/StudentsManagement/StudentsManagement";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers-management/" element={<TeachersManagement />} />
        <Route path="/courses-management/" element={<CoutrsesManagmen />} />
        <Route path="/students-management/" element={<StudentsManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
