import { React, useContext } from 'react';
import { MyStoreContext } from '../../App';
import './EditListPage.scss';
import EditUserContacts from './EditUserContacts/EditUserContacts';

export default function EditListPage() {
    const data = useContext(MyStoreContext);

    return (
        <div className="EditListPage">
            <div className="block">
                <p>Name</p>
                <p>Surname</p>
                <p>Phone</p>
                <p>Action</p>
            </div>
            {data.loading && <p className="loading">Loading Contacts...</p>}
            {!data.loading && data.users.map((user) => (
                <EditUserContacts
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
