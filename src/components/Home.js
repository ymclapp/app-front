import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import Public from './Public';
import Moderator from './Moderator';
import Admin from './Admin';

const Home = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <>
            <div className='container'>
                <header className='jumbotron'>
                    <h3>{content}</h3>
                </header>
            </div>

            <div>
                <header><strong>This is the PUBLIC content</strong></header>
                <Public /><br /><br />
                <header><strong>This is the MODERATOR content</strong></header>
                <Moderator /><br /><br />
                <header><strong>This is the ADMIN content</strong></header>
                <Admin />
            </div>
        </>
    )
}

export default Home;
