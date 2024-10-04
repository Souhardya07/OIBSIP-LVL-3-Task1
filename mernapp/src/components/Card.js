import React from 'react'

export default function Card() {
    return (
        <div><div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/margherita.jpg " className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-4 ">Margherita</h5>
                    <p className="card-text">A classic Italian pizza topped with fresh mozzarella, ripe tomatoes, basil leaves, olive oil, and salt.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-white rounded'>
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-white rounded'>
                            <option value="small">Small</option>
                            <option value="regular">Regular</option>
                            <option value="large">Large</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>Price:</div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
