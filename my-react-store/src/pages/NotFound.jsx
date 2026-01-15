import './NotFound.css'
import { Link } from 'react-router-dom'
import { IconMoodPuzzled, IconCodeCircle } from '@tabler/icons-react';

function NotFound(){
    return (
        <div className='pb-4'>
            <IconMoodPuzzled stroke={2} size={100} color={"gray"} />
            <IconCodeCircle size={84} color={"pink"} />
            <h1>404 - Page Not Found</h1>
            <p className='text-secondary fs-5'>oops! The page you're looking for doesn't exist</p>
            <Link className='btn btn-dark' href="/">Go Home</Link>
        </div>
    )
}

export default NotFound