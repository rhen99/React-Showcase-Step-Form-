function Credentials({form, setForm}) {
    return (
        <>
            <div className="form-div">
            
            <input type="text" name="username" id="username" className="form-input" onChange={(e) => {
                setForm({...form, [e.target.name]: e.target.value})
            }} value={form.username}/>
            <span className="form-focus"></span>
            <label htmlFor="username">Username</label>
        </div>
        <div className="form-div">
            
            <input type="password" name="password" id="password" className="form-input" onChange={(e) => {
                setForm({...form, [e.target.name]: e.target.value})
            }} value={form.password}/>
            <span className="form-focus"></span>
            <label htmlFor="password">Password</label>
        </div>
        <div className="form-div">
            <input type="password" name="password_confirm" id="password_confirm" className="form-input" onChange={(e) => {
                setForm({...form, [e.target.name]: e.target.value})
            }} value={form.password_confirm}/>
            <span className="form-focus"></span>
            <label htmlFor="password_confirm">Password Confirm</label>
        </div>
        
        </>
    )
}

export default Credentials
