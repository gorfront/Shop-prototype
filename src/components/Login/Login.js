
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import * as yup from 'yup'
import { fetchUsers } from '../../store/slice/users/usersAPI';
import { selectUsers, setCurrentUser } from '../../store/slice/users/usersSlice';
import './Login.css'



function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)
    const validationSchema = yup.object().shape({
        logEmail: yup.string(),
        logPass: yup.string()
    })

    useEffect(() => {
        if(users.currentUser.id) {
            navigate('/')
        }
    }, [users.currentUser])


    useEffect(() => {
        console.log(users);
        if(!users.usersData.length) {
            dispatch(fetchUsers())
        }
    }, [])

    return (
        <>
        <button className='homeButton' onClick={() => navigate('/')}>Home</button>
            {
                    <Formik
                        initialValues={{
                            logEmail: 'john@gmail.com',
                            logPass: 'm38rmF$',
                        }}

                        onSubmit={(values, { resetForm }) => {
                            dispatch(setCurrentUser(values))
                            resetForm();
                        }}

                        validateOnBlur
                        validationSchema={validationSchema}>

                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

                            <form className='logForm' onSubmit={handleSubmit}>
                                <h1 className='logTitle'>Log In</h1>

                                {touched.logEmail && errors.logEmail && <p className='error'>{errors.logEmail}</p>}

                                <input
                                    className='login'
                                    type={`text`}
                                    name={`logEmail`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.logEmail}
                                    placeholder='  '
                                />
                                <label htmlFor="logEmail" className="placeholder">Email</label>


                                <input
                                    className='logPass'
                                    type={`password`}
                                    name={`logPass`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.logPass}
                                    placeholder='  '
                                />
                                <label htmlFor="logPass" className="placeholder">Password</label>

                                {touched.logPassword && errors.logPassword && <p className='error'>{errors.logPass}</p>}

                                <button
                                    className='btn'
                                    type="submit"
                                    disabled={!isValid && !dirty}
                                >
                                    LOG IN
                                </button>

                                <div className='line'></div>

                                <button
                                className='newAcc'
                                type='button'
                                onClick={() => navigate('/registration')}
                                >
                                    CREATE NEW ACCOUNT
                                </button>

                            </form>
                        )}
                    </Formik>
            }
        </>
    )
}

export default Login