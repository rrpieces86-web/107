import './NotFound.css'
import { Link } from 'react-router-dom'

function NotFound(){
    return (
        <div className='pb-4'>
            <h1>404 - Page Not Found</h1>
            <p className='text-secondary fs-5'>oops! The page you're looking for doesn't exist</p>
            <Link className='btn btn-dark' href="#">Go Home</Link>
        </div>
    )
}

export default NotFound