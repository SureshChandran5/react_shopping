import React from 'react'

const Contact = () => {
  return (
    <>
       <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Have some Questions?</h1><hr />
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <img src='/images/mail.jpg' height="400px" width="450px" style={{ borderRadius: "10px" }}></img>
            </div>
            <div className='col-md-6'>
              <form>
              <div className="mb-3">
                  <label htmlFor="text" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Send Mail</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
