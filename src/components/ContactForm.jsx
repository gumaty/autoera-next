import {Formik} from "formik";
import {Alert, Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

function ContactForm() {

    const [isSuccess, setIsSuccess] = useState(false);

    let status;

    function handleSubmit(values, { setSubmitting }) {

        if(!status) {
            setIsSuccess( true )
            setTimeout(() => {
                setIsSuccess( false );
            }, 3000);
        }
        setSubmitting(false);
    }
    return (
        <>
            <Formik
                initialValues={{ name: '', message: '', email: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Niewłaściwy adres email';
                    }

                    if (!values.name) {
                        errors.name = 'Required';
                    } else if (values.name.length < 3){
                        errors.name = 'Imię powinno mieć conajmniej 3 znaki';
                    }

                    if (!values.message) {
                        errors.message = 'Required';
                    } else if (values.message.length < 10){
                        errors.message = 'Wiadomość powinno mieć conajmniej 10 znaków';
                    }

                    status = errors.length;
                    return errors;
                }}

                onSubmit={handleSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                      isSubmitting
                      /* and other goodies */

                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Skontaktuj się z nami</Typography>
                            <TextField
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                fullWidth
                                required
                                id="outlined-required"
                                label="Podaj adres email"
                                sx={{mt: 3}}
                            />
                            {errors.email && touched.email && (
                                <Alert sx={{mb: '10px'}} severity="warning">{errors.email}</Alert>
                            )}

                            <TextField
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={values.name}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Podaj swoje imię"
                                sx={{mt: 3}}
                            />
                            {errors.name && touched.name && (
                                <Alert sx={{mb: '10px'}} severity="warning">{errors.name}</Alert>
                            )}

                            <TextField
                                type="text"
                                name="message"
                                onChange={handleChange}
                                value={values.message}
                                id="outlined-multiline-static"
                                label="W czym możemy pomóc?"
                                required
                                multiline
                                rows={5}
                                sx={{mt: 3, mb: (touched.message && errors.message)  ? 0 : 3, maxWidth: '300px'}}

                            />
                            {errors.message && touched.message && (
                                <Alert sx={{mb: '10px'}} severity="warning">{errors.message}</Alert>
                            )}

                            <Button
                                variant="contained"
                                type="submit"
                                disabled={isSubmitting}>
                                Wyślij
                            </Button>
                            { isSuccess && (
                                <Alert variant="filled" severity="success" sx={{my: 2}}>
                                Formularz został zweryfikowany poprawnie i wysłany
                                </Alert>
                                )
                            }

                        </Box>

                    </form>
                )}
            </Formik>
        </>
    )
}

export default ContactForm;