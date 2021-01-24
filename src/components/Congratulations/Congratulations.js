function Congratulations({form}) {
    return (
        <>
          <h2 className="form-title">Your Fields</h2>
          <ul className="form-list">
              <li className="form-item">
                  <h6 className="form-name">First Name</h6>
                  <p className="form-value">{form.first_name}</p>
              </li>
              <li className="form-item">
                  <h6 className="form-name">Last Name</h6>
                  <p className="form-value">{form.last_name}</p>
              </li>
              <li className="form-item">
                  <h6 className="form-name">Email</h6>
                  <p className="form-value">{form.email}</p>
              </li>
              <li className="form-item">
                  <h6 className="form-name">Username</h6>
                  <p className="form-value">{form.username}</p>
              </li>
              <li className="form-item">
                  <h6 className="form-name">Password</h6>
                  <p className="form-value">secret</p>
              </li>
              
          </ul>  
        </>
    )
}

export default Congratulations
