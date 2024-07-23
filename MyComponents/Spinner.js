import React from 'react'

const Spinner = () => {
    return (
        <div>
            <div className="text-center align-self-center mt-5" style={{color:'#0078D4'}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h6 className='mt-2'style={{fontFamily:"revert-layer"}}>Please Wait! while we choose the best for you</h6>
            </div>
        </div>
    )
}

export default Spinner