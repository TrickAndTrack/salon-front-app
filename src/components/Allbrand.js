import React from 'react'

import "./Allbrand.css";
import FooterBlue from "../components/FooterBlue";
import AllbrandService from "../components/AllbrandService"

class Allbrand extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
  
    componentDidMount() {
        AllbrandService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }
  
  
    render() {
    return (
      <div>
                  
  
                  <section className="vh-100 gradient-custom-2">
                      <div className="container py-5 h-100">
                          <div className="row d-flex justify-content-center align-items-center h-100">
                              <div className="col-md-12 col-xl-10">
  
                                  <div className="card mask-custom">
                                      <div className="card-body p-4 text-white">
  
                                          <div className="text-center pt-3 pb-2">
                                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" />
                                              <h2 className="my-4">List Of All brand</h2>
                                          </div>
  
                                          <table className="table text-white mb-0">
                                              <thead>
                                                  <tr>
                                                      <th scope="col">Salon Name</th>
                                                      <th scope="col">Salon location</th>
                                                      <th scope="col">About</th>
                                                      <th scope="col">Number of Staff</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  {
                                                      this.state.users.map(
                                                          user =>
                                                              <tr key={user.userId} className="fw-normal">
                                                                  <td className="align-middle"> {user.name}</td>
                                                                  <td className="align-middle"> {user.location}</td>
                                                                  <td className="align-middle"> {user.about}</td>
                                                                  <td className="align-middle"> {user.staffNumber}</td>
                                                              </tr>
                                                      )
                                                  }
                                              </tbody>
                                          </table>
  
  
                                      </div>
                                  </div>
  
                              </div>
                          </div>
                      </div>
                  </section>
                  <div className="bottomone"><FooterBlue /></div>
              </div>
          )
      }
    }
export default Allbrand