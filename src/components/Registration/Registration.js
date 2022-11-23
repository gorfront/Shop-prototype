
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as yup from 'yup'
import { addNewUser } from '../../store/slice/users/usersSlice';
import './Registration.css'


function Registration() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        firstName: yup.string().typeError('* petq e lini tox').required('*partadir e'),

        lastName: yup.string().typeError('* petq e lini tox').required('*partadir e'),

        username: yup.string().typeError('* petq e lini tox').required('*partadir e'),
        
        phoneNumber: yup.string().typeError('* +(374)(xx)(xxx)(xxx) ').required('*partadir e'),

        email: yup.string().email('* test@test.com').required('*partadir e'),

        password: yup.string().min(6, "Must be 6 and more").typeError('* A-Z a-z 0-9').required('*partadir e'),

        confirmPassword: yup.string().typeError('* A-Z, a-z, 0-9').oneOf([yup.ref('password')], '*parolner@ chen hamapatasxanum').required('*partadir e'),
    })
    return (
        <>
        <button className='homeButton' onClick={() => navigate('/')}>Home</button>
            <Formik
                initialValues={{
                    
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={(values, { resetForm }) => {
                    dispatch(addNewUser(values))
                    navigate('/login')
                    resetForm();
                }}
                validateOnBlur
                validationSchema={validationSchema}>

                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <form className='form' onSubmit={handleSubmit}>
                        <h1 className='title'>Registration</h1>

                        <input
                                className='firstname'
                                type={`text`}
                                name={`firstName`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                placeholder = '  '
                            />
                            <label htmlFor="firstName" className="placeholderfirstname">First Name</label>
                            {touched.firstName && errors.firstName && <p className='error'>{errors.firstName}</p>}

                            <input
                                className='lastname'
                                type={`text`}
                                name={`lastName`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                placeholder = '  '
                            />
                            <label htmlFor="lastName" className="placeholderlastname">Last Name</label>
                            {touched.lastName && errors.lastName && <p className='error'>{errors.lastName}</p>}

                            <input
                                className='username'
                                type={`text`}
                                name={`username`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                placeholder = '  '
                            />
                            <label htmlFor="username" className="placeholderusername">Username</label>
                            {touched.username && errors.username && <p className='error'>{errors.username}</p>}

                            <input
                                className='phonenumber'
                                type={`text`}
                                name={`phoneNumber`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                                placeholder = '  '
                            />
                            <label htmlFor="username" className="placeholderphonenumber">Phone Number</label>
                            {touched.phoneNumber && errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}

                            <input
                                className='email'
                                type={`text`}
                                name={`email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder = '  '
                            />
                            <label htmlFor="email" className="placeholderEmail">Email</label>
                            {touched.email && errors.email && <p className='error'>{errors.email}</p>}

                            <input
                                className='pass'
                                type={`password`}
                                name={`password`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder= '  '
                            />
                            <label htmlFor="password" className="placeholderPass">Password</label>
                            {touched.password && errors.password && values.password.length < 6 && <p className='error'>{errors.password}</p>}

                            <input
                                className='confPass'
                                type={`password`}
                                name={`confirmPassword`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                placeholder = '  '
                            />
                            <label htmlFor="confirmPassword" className="placeholderConfPass">Confirm Password</label>
                            {touched.confirmPassword && errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

                        <button
                            className='btn'
                            disabled={!isValid && !dirty}
                            type={`submit`}
                        >Registration</button>

                    </form>
                )}
            </Formik>
        </>
    )
}

export default Registration