import '../shared/Input.scss'
const Input = ({ label, placeholder, id, name, errors, required, type, validationSchema, register }) => {
    return <>
        <div className="input-control-container">
            {label && <label className="label">
                {label} {required ? '*' : ''}
            </label>}
            <input className="input-control" placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                {...register(name, validationSchema)}
                required={required}
            />
        </div>
    </>
}

export default Input