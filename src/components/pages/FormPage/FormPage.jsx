import { React, useContext, useState, useRef, useEffect } from 'react';
import './FormPage.scss';
import { useNavigate } from 'react-router-dom';
import { MyStoreContext } from '../../App';
import REG_PHONE from '../../../constants/itemConstants';

export default function FormPage() {
    const data = useContext(MyStoreContext);
    const input = useRef('');
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [phonePlaceholder, setPhonePlaceholder] = useState('');

    const newUser = {
        id: Date.now(),
        name: name,
        surname: surname,
        phone: phone,
    };

    const addUser = (user) => {
        if (newUser.name === '') {
            document.querySelector('#name').classList.add('error');

            return;
        } else if (newUser.surname === '') {
            document.querySelector('#surname').classList.add('error');

            return;
        } else if (newUser.phone === '' || newUser.phone.match(REG_PHONE) === null) {
            setPhonePlaceholder('Field filled incorrectly ;(');
            setPhone('');
            document.querySelector('#phone').classList.add('error');

            return;
        } else {
            data.setUsers([...data.users, user]);
            navigate('/list');
        }
    };

    useEffect(() => {
        input.current.focus();
    }, [name]);

    return (
        <div className="FormPage">
            <div>
                <p>Name:
                    <input
                        ref={input}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => {
                            e.target.classList.remove('error');
                            setName(e.target.value);
                        }}
                    />
                </p>
                <p>Surnam:
                    <input
                        type="text"
                        id="surname"
                        value={surname}
                        onChange={(e) => {
                            e.target.classList.remove('error');
                            setSurname(e.target.value);
                        }}
                    />
                </p>
                <p>Phone:
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        placeholder={phonePlaceholder}
                        autoComplete="tel"
                        onChange={(e) => {
                            e.target.classList.remove('error');
                            setPhone(e.target.value);
                        }}
                    />
                </p>
            </div>
            <div>
                <p>
                    <button type="button" onClick={() => addUser(newUser)}>Save</button>
                    <button type="button" onClick={() => navigate('/list')}>Сancel</button>
                </p>
            </div>
        </div>
    );
}
