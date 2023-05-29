import { useEffect, useState } from "react"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'suhkha',
        email: 'mail@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('useEffect called');
    }, []);

    useEffect(() => {
        console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        console.log('email changed');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input type="text" name="username" className="form-control" placeholder="Username" value={username} onChange={onInputChange} />
            <input type="email" name="email" className="form-control mt-2" placeholder="Email" value={email} onChange={onInputChange} />
        </>
    )
}
