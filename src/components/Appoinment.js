import React from 'react'

import "./Allbrand.css";
import FooterBlue from "./FooterBlue";
import appoinmentBack from './appoinmentBack';


class appoinment extends React.Component {

   
    constructor(props) {
        super(props)
        this.state = {
            appoinment: []
        }
    }

    componentDidMount() {
        appoinmentBack.getappoinment().then((response) => {
            this.setState({ appoinment: response.data })
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
                                            <h2 className="my-4">Appoinment List</h2>
                                        </div>

                                        <table className="table text-white mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Mobile</th>
                                                    <th scope="col">Informtion</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.appoinment.map(
                                                        user =>
                                                            <tr key={appoinment.appoinId} className="fw-normal">
                                                                <td className="align-middle"> {appoinment.appoinId}</td>
                                                                <td className="align-middle"> {appoinment.fullname}</td>
                                                                <td className="align-middle"> {appoinment.mobile}</td>
                                                                <td className="align-middle"> {appoinment.informtion}</td>
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
export default appoinment