import React, { useState } from 'react'
import "./todo.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {

    const [data, setData] = useState('')
    const [data1, setData1] = useState([])

    const adddata = () => {

        if (!data) {

        } else {
            setData1([...data1, data])
            setData('')
        }
    }

    const rmvall = () => {
        setData1([])

    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="card-body p-5">

                                <form className="d-flex justify-content-center align-items-center mb-4">
                                    <div className="form-outline flex-fill">
                                        <input type="text" id="form2" className="form-control mb-1"
                                            value={data}
                                            onChange={(e) => setData(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-info ms-3 mb-1" onClick={adddata}>Add</button>
                                </form>

                                {/* Tabs content */}
                                {
                                    data1.map((ele) => {
                                        return (
                                            <div className="tab-content" id="ex1-content">
                                                <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                                    <ul ul className="list-group mb-0">
                                                        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded" style={{ backgroundColor: '#f4f6f7' }}
                                                        >
                                                            {ele}

                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        )
                                    })

                                }
                                <div class="text-center">
                                    <button type="submit" className="btn btn-info center" onClick={rmvall}>Delete All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Todo