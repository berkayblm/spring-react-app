
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import ButtonAppBar from './components/Appbar';
import DataGridDemo from './components/DataGrid';
import Student from './components/Student';
import Settings from "./components/SettingsComponent";


import SignInSide from "./components/SingIn/SignInSide";
import SignInSideAdmin from "./components/SingIn/SignInSideAdmin"
import SignUp from "./components/SignUp/SignUp";
import StickyFooter from "./components/Footer/StickyFooter";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/">



          <Route path="/signin" element={
            <>
              <SignInSide>

              </SignInSide>




            </>

          } >
          </Route>


          <Route path="getAllStudents" element={<>
            <ButtonAppBar>

            </ButtonAppBar>
            <Student>

            </Student>

            <StickyFooter />
          </>
          }>
          </Route>
          <Route path="employeeDataGrid" element={

            <>
              <DataGridDemo>

              </DataGridDemo>

              <StickyFooter></StickyFooter>
            </>

          }></Route>

          <Route path="settings" element={
          
          <>
          <Settings></Settings>
          <StickyFooter></StickyFooter>
          </>
          }
          ></Route>


          <Route path="/signup" element={
            <>
              <SignUp>

              </SignUp>
            </>


          }></Route>


          <Route path="admin">
            <Route path="signin" element= {
              <>
                <SignInSideAdmin></SignInSideAdmin>
              </>

            }>

            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>

    /*<div className="App">
    <ButtonAppBar/>
    <Student/>
    <DataGridDemo/>
   
    </div>*/
  );
}

export default App;
