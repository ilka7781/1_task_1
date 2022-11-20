import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase";
import './admin.scss';
import {Container, MenuItem} from "@mui/material"
import {useForm} from 'react-hook-form';

const Admin = () => {
    const [inputImage, setInputImage] = useState('');
    const [input, setInput] = useState('');
    const [inputLn, setInputLn] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputGroup, setInputGroup] = useState('');
    const [inputClass, setInputClass] = useState('');


    const createStudents = async () => {
        const collectionRef = collection(db, "students");
        const payload = {
            imageUrl: inputImage,
            name: input,
            lastname: inputLn,
            age: inputAge,
            group: inputGroup,
            class: inputClass
        };
        await addDoc(collectionRef, payload);
        setInput('');
        setInputLn('');
        setInputAge('');
        setInputImage('');
        setInputGroup('');
        setInputClass('');
    }

    const groups = [
        {
            value: 'A'
        },
        {
            value: 'B'
        },
        {
            value: 'C'
        },
        {
            value: 'D'
        }
    ];
    const classess = [
        {
            class: 1
        },
        {
            class: 2
        },
        {
            class: 3
        },
        {
            class: 4
        },
        {
            class: 5
        },
        {
            class: 6
        },
        {
            class: 7
        },
        {
            class: 8
        },
        {
            class: 9
        },
        {
            class: 10
        },
        {
            class: 11
        }
    ]
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='admin_body'>
            <Container className='admin_container'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <h1>ADD A STUDENT FORM</h1>
                    {/*IMAGE*/}
                    <TextField {...register("imageURL", {
                        required: true, pattern: {
                            value: /^(ftp|http|https):\/\/[^ "]+$/
                        }
                    })}
                               id="standard-basic" label="ImageURL" variant="standard" type='url'
                               onChange={e => setInputImage(e.target.value)} value={inputImage}
                    />
                    {errors.imageURL && (<span className='form_error'>imageURL is required</span>)}

                    {/*firstname*/}
                    <TextField {...register("firstname", {required: true, maxLength: 20, pattern: {
                        value:/^[A-Za-z]+$/i
                        }})}
                               id="standard-basic" label="Firstname" variant="standard" type='text'
                               onChange={e => setInput(e.target.value)} value={input}
                    />
                    {errors.firstname && <span className='form_error'>Firstname is required</span>}

                    {/*lastname*/}
                    <TextField {...register("lastname", {required: true, maxLength: 20, pattern: {
                        value:/^[A-Za-z]+$/i
                        } })}
                               id="standard-basic" label="Lastname" variant="standard" type='text'
                               onChange={e => setInputLn(e.target.value)} value={inputLn}
                    />
                    {errors.lastname && <span className='form_error'>Lastname is required</span>}

                    {/*age*/}
                    <TextField {...register("age", {required: true, valueAsNumber: true, maxLength: 2})}
                               id="standard-basic" label="Age" variant="standard" type='number'
                               onChange={e => setInputAge(e.target.value)} value={inputAge}
                    />
                    {errors.age && <span className='form_error'>Age is required</span>}

                    {/*group*/}
                    <TextField {...register("group", {required: true})}
                               id="standard-basic" select label="Group" variant="standard"
                               onChange={e => setInputGroup(e.target.value)} value={inputGroup}>
                        {groups.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>

                    {errors.group && <span className='form_error'>Group is required</span>}

                    {/*class*/}
                    <TextField {...register("class", {required: true})}
                               id="standard-basic" select label="Class" variant="standard"
                               onChange={e => setInputClass(e.target.value)} value={inputClass}>
                        {classess.map((option) => (
                            <MenuItem key={option.class} value={option.class}>
                                {option.class}
                            </MenuItem>
                        ))}
                    </TextField>

                    {errors.class && <span className='form_error'>Class is required</span>}

                    <button disabled={!isValid} type='submit' className='form_submit' onClick={createStudents}>Submit</button>
                </form>

            </Container>

        </div>
    );
};

export default Admin;