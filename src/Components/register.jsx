import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../Store/actions/user'

export default function Register() {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.userReducer)
    const [selectedUser, setSelectedUser] = useState()

    useEffect(() => {
        setSelectedUser(userState.seletedUser)
    }, [userState.seletedUser])

    const [values, setValues] = useState({
        id: '',
        username: '',
        fullname: '',
        email: '',
        password: '',
        phonenumber: '',
        type: 'Client',
    })

    const handleChange = (event) => {
        const { value, name } = event.target

        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUserAction(values))
    }

    const { username, fullname, email, password, phonenumber, type } = selectedUser || {}

    return (
        <div className="card p-0">
            <div className="card-header bg-warning text-white font-weight-bold">REGISTER FORM</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    value={username}
                                    name="username"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    value={fullname}
                                    name="fullname"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    value={password}
                                    name="password"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    value={phonenumber}
                                    name="phonenumber"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    value={email}
                                    name="email"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Type</label>
                                <select
                                    value={type}
                                    name="type"
                                    onChange={handleChange}
                                    className="form-control"
                                >
                                    <option>Client</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning mr-2">
                        SAVE
                    </button>
                    <button type="reset" className="btn btn-outline-dark">
                        RESET
                    </button>
                </form>
            </div>
        </div>
    )
}
