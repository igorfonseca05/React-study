import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// pages
import Home from './pages/Home'

// Components
import Nav from './components/navbar/Nav'

import { useContextModal } from './context/ModalContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div>
                  <form className="form">
                    <p className="title">Register </p>
                    <p className="message">Signup now and get full access to our app. </p>
                    <div className="flex">
                      <label>
                        <input required="" placeholder="" type="text" className="input" />
                        <span>Firstname</span>
                      </label>

                      <label>
                        <input required="" placeholder="" type="text" className="input" />
                        <span>Lastname</span>
                      </label>
                    </div>

                    <label>
                      <input required="" placeholder="" type="email" className="input" />
                      <span>Email</span>
                    </label>

                    <label>
                      <input required="" placeholder="" type="password" className="input" />
                      <span>Password</span>
                    </label>
                    <label>
                      <input required="" placeholder="" type="password" className="input" />
                      <span>Confirm password</span>
                    </label>
                    <button className="submit">Submit</button>
                    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
                  </form>
                </div>

              </div>
              {/* <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div> */}
            </div>
          </div>
        </div>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
