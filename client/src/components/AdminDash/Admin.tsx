import './Admin.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const AdminDash: React.FC = () => {
    const {isLoggedIn, user} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn || !user?.isAdmin) {
            navigate('/login')
        }
    }, [isLoggedIn, user, navigate])

  return (
    <div>
        <h1>Admin Dashboard</h1>
        <Link to='/addproduct'><button>Add a new product to the menu</button></Link>
    </div>
  )
}

export default AdminDash;