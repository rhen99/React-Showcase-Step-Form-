function Personal({setForm, form}) {
    return (
        <>
        <div className="form-div">
            
            <input type="text" name="first_name" id="first_name" className="form-input" onChange={(e) => {
                setForm({...form, [e.target.name]: e.target.value})
            }} value={form.first_name}/>
            <span className="form-focus"></span>
            <label htmlFor="first_name">First Name</label>
        </div>
        <div className="form-div">
            
            <input type="text" name="last_name" id="last_name" className="form-input" onChange={(e) => {
                setForm({...form, [e.target.name]: e.target.value})
            }} value={form.last_name}/>
            <span className="form-focus"></span>
            <label htmlFor="last_name">Last Name</label>
        </div>
        <div className="form-div">
            <input type="text" name="email" id="email" className="form-input" onChange={(e) => {
                setForm({...form, [e.target.name]: e.target.value})
            }} value={form.email}/>
            <span className="form-focus"></span>
            <label htmlFor="email">Email</label>
        </div>
        </>
    )
}

export default Personal
