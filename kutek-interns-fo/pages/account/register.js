import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AccForm.module.css'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState
    ('')

    const { register, error } = useContext(AuthContext)

    useEffect(() => error && toast.error(error))

    const handleSubmit = e => {
        e.preventDefault()
    
        if (password !== passwordConfirm) {
            toast.error('Passwords not matching!')
            return
        }

        register({ username, email, password })
    }

    
    return (
        <Layout title='User Registration'>
            <div className={styles.authO}>
                <h1 className={styles.authTitle}>
                    <FaUser /> Register
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Repeat Password</label>
                        <input 
                            type="password" 
                            id='passwordConfirm'
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    <input 
                        type='submit'
                        value='Register'
                        className='btn-secondary'
                    />
                </form>

                <p className={styles.noAccount}>
                    Already have an account? <Link href='/account/login' className={styles.linkAuth}>Log In</Link>
                </p>
            </div>
        </Layout>
    )
}