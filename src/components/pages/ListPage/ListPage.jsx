import { React, useContext } from 'react';
import './ListPage.scss';
import UserСontacts from './UserСontacts/UserСontacts';
import { MyStoreContext } from '../../App';

export default function ListPage() {
    const data = useContext(MyStoreContext);

    return (
        <div className="ListPage">
            <div className="block">
                <p>Name</p>
                <p>Surname</p>
                <p>Phone</p>
                <p>Action</p>
            </div>
            {data.loading && <p className="loading">Loading Contacts...</p>}
            {!data.loading && data.users.map((user) => (
                <UserСontacts
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    phone={user.phone}
                    surname={user.surname}
                />
            ))}
        </div>
    );
}
