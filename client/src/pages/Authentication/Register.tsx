import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { RegisterState } from './authStateType'
import { Navbar } from '../../components/Navbar/Navbar'
import './Auth.css'


const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!firstName || !lastName || !email || !password ) {
            setError('Please fill all the fields')
            return;
        }

        const user = { firstName, lastName, email, password };
        fetch('http://localhost:2000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })

        .then(res => res.json())
        .then((data: RegisterState) => {
            setSuccess(true);
            setError('');
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            console.log(`User registered successfully: ${data.firstName} ${data.lastName}`)
            navigate('/login')
        })
        .catch(error => {
            setError(`Error registering user: ${error}`)
            setSuccess(false);
        })
    }

    return (
       <>
       <Navbar />
       <div className="register-container">
        <h2 className='sign-up-title'>Sign Up Today!</h2>
        <div className='form-container'>
            <form className='register-form' onSubmit={handleSubmit}>
            <h2>Create an Account</h2>
                <div className='name-input'>
                    <div className='firstname'>
                        <label>First Name</label>
                        <input 
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange} 
                        />
                    </div>
                    <div className='lastname'>
                        <label>Last Name</label>
                        <input 
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange} 
                        />
                    </div>
                </div>
                <div className='email-input'>
                    <label>Email</label>
                    <input 
                       type='email'
                       value={email}
                       placeholder='example@company.com'
                       onChange={handleEmailChange}
                    />
                </div>
                <div className='password-input'>
                    <label>Password</label>
                    <input 
                       type='password'
                       value={password}
                       onChange={handlePasswordChange}
                    />
                </div>
                <button type='submit'>Sign Up</button>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">User Registered Successfully! Proceed to Log In</div>}
                <h3 className='login-prompt'>Have an Account? <Link to={'/login'}>Login</Link></h3>
            </form>
        </div>
       </div>
       </>
    )
}

export default RegisterPage