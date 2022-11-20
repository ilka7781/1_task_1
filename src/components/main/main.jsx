import React, {useEffect, useState} from 'react';
import {UserAuth} from "../../context/authContext";
import Container from '@mui/material/Container';
import './main.scss';
import {Avatar, Card, Grid} from "@mui/material";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase";
import {Link} from "react-router-dom";
import UpdateBox from "../updateBox/updateBox";


const Main = () => {
    const {user} = UserAuth();
    const [students, setStudents] = useState([]);
    const [updateBox, setUpdateBox] = useState(false);
    const colRef = collection(db, 'students');

    useEffect(() => {
        const getStudents = async () => {
            const snapshots = await getDocs(colRef);
            setStudents(snapshots.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getStudents();

    }, []);



    const studentCard = students.map((student)=>{

        const deleteStudent = async () =>{
        const studentDoc = doc(db,'students', student.id);
        await deleteDoc(studentDoc);
        };


        return (
            <Card className='students_card'>
                <Avatar className='students_card_avatar' src={student.imageUrl}/>
                <h1>Name : {student.name}</h1>
                <h1>Lastname: {student.lastname}</h1>
                <h1>Age: {student.age}</h1>
                <h1>Group: {student.group}</h1>
                <h1>Class: {student.class}</h1>
                <button onClick={deleteStudent} className='main_button_delete'>Delete</button>
                <button onClick={()=> setUpdateBox(true)} className='main_button_delete'>Edit</button>
                {updateBox === true && <UpdateBox student={student} setUpdateBox={setUpdateBox}/>}
            </Card>
        )
    });


    return (
        <div className='main_body'>
            <Container className='main_container'>
                <h2>Welcome, {user?.displayName}</h2>
                <br/>
                <h3>That's your class</h3>
                <br/>
                <br/>
                <Link to='/admin' className='main_button'>Add a student</Link>
                <Grid container rowGap={5} columnGap={8} className='students_grid'>
                    {studentCard}
                </Grid>
            </Container>
        </div>
    );
};


export default Main;