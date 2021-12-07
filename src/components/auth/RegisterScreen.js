import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div className="contenedor">
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Registro</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><img width="40%" className="img-fluid float-right mt-5" src="https://afavor.mx/wp-content/uploads/2021/09/a-favor-logo-1.png"  alt="logo"/></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Nombre completo"/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Correo"/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Contraseña"/>
                            </div>
                           
                            <div className="form-group">
                                <input type="submit" value="Registro" className="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            ¿Ya tienes una cuenta?<Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
