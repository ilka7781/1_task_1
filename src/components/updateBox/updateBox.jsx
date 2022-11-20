import React, {useState} from 'react';
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";
import TextField from "@mui/material/TextField";
import './updateBox.scss';
import {MenuItem} from "@mui/material";

const UpdateBox = ({student, setUpdateBox}) => {
    const [students, setStudents] = useState([]);
    const [inputImage, setInputImage] = useState('');
    const [input, setInput] = useState('');
    const [inputLn, setInputLn] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputGroup, setInputGroup] = useState('');
    const [inputClass, setInputClass] = useState('');

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
    const updateStudent = async () =>{
        const studentDoc = doc(db,'students', student.id);
        await updateDoc(studentDoc, {
            imageUrl: inputImage,
            name: input,
            lastname: inputLn,
            age: inputAge,
            group: inputGroup,
            class: inputClass
        });
        setUpdateBox(false);
    };
    return (
        <div className='update_inputs'>
            <TextField className='inputs' id="standard-basic" label="ImageURL" variant="standard" type='url'
                       onChange={e => setInputImage(e.target.value)} value={inputImage}/>
            <TextField className='inputs' id="standard-basic" label="Firstname" variant="standard" type='text'
                       onChange={e => setInput(e.target.value)} value={input}/>
            <TextField className='inputs' id="standard-basic" label="Lastname" variant="standard" type='text'
                       onChange={e => setInputLn(e.target.value)} value={inputLn}/>
            <TextField className='inputs' id="standard-basic" label="Age" variant="standard" type='number'
                       onChange={e => setInputAge(e.target.value)} value={inputAge}/>
            <TextField className='inputs' id="standard-basic" select label="Group" variant="standard"
                       onChange={e => setInputGroup(e.target.value)} value={inputGroup}>
            {groups.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.value}
                </MenuItem>
            ))}
            </TextField>
            <TextField className='inputs' id="standard-basic" select label="Class" variant="standard" type='url'
                       onChange={e => setInputClass(e.target.value)} value={inputClass}>
                {classess.map((option) => (
                    <MenuItem key={option.class} value={option.class}>
                        {option.class}
                    </MenuItem>
                ))}
            </TextField>
            <button className='update_button' onClick={updateStudent}>Update</button>
        </div>
    );
};

export default UpdateBox;