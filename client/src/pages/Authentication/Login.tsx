import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import { useAuth, User } from '../../context/AuthContext'
import './Auth.css'



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!email || !password) {
            setError('Please fill in all fields')
            return;
        }

        try{
            const response = await axios.post('http://localhost:2000/api/login', {
                email,
                password,
            })
            if (response.status === 200) {
                const user: User = response.data
               login(user)
                navigate('/home')

            } else {
                setError('Invalid credentials')
            }
        } catch (error:any) {
            setError('Invalid Credentials. Try Again.')
        }
    }

    return (
       <>
       <Navbar />
       <div className='login-container'>
        <div className='login-form-container'>
            <form onSubmit={handleLogin}>
                <h2>Log in</h2>
                <div className='input'>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type='submit'>Log In</button>
                {error && <div className="error-message">{error}</div>}
                <h3 className='signup--prompt'>Don't Have an Account? <Link to={'/register'}>Sign Up</Link></h3>
            </form>
        </div>
       </div>
       </>
    )
}

export default LoginPage