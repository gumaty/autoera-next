import {Alert, Box, Button, Card, TextField, Typography} from "@mui/material";
import {Formik} from "formik";
import {useState} from "react";

function AddFamilyForm(props) {

    const [isSuccess, setIsSuccess] = useState(false);

    let status;

    function handleSubmit(values, { setSubmitting }) {

        const newData = {
            brand: values.brand,
            family: values.family,
            years: values.years,
            description: values.description,
            image: values.image,
        };

        props.onAddFamily(newData);

        values.brand='';
        values.family='';
        values.years='';
        values.description='';
        values.image='';

        if(!status) {
            setIsSuccess( true )
            setTimeout(() => {
                setIsSuccess( false );
            }, 3000);
        }
        setSubmitting(false);
    }

    return (
               <Formik
                    initialValues={{ brand: '', family: '', years: '', description: '', image: '' }}
                    validate={values => {
                        const errors = {};

                        if (!values.brand) {
                            errors.brand = 'Required';
                        } else if (values.brand.length < 2){
                            errors.brand = 'Wiadomość powinno mieć conajmniej 2 znaki';
                        }

                        if (!values.family) {
                            errors.family = 'Required';
                        } else if (values.family.length < 2){
                            errors.family = 'Wiadomość powinno mieć conajmniej 2 znaki';
                        }

                        if (!values.years) {
                            errors.years = 'Required';
                        } else if (values.years.length < 4){
                            errors.years = 'Wiadomość powinno mieć conajmniej 4 znaki';
                        }

                        if (!values.description) {
                            errors.description = 'Required';
                        } else if (values.description.length < 10){
                            errors.description = 'Wiadomość powinno mieć conajmniej 10 znaków';
                        }

                        if (!values.image) {
                            errors.image = 'Required';
                        } else if (values.image.length < 2){
                            errors.image = 'Wiadomość powinno mieć conajmniej 2 znaki';
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
                            <Box sx={{p: 3, display: 'flex', flexDirection: 'column'}}>
                                <TextField
                                    type="text"
                                    name="brand"
                                    onChange={handleChange}
                                    value={values.brand}
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Nazwa marki"
                                    sx={{mt: 3}}
                                />
                                {errors.brand && touched.brand && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.brand}</Alert>
                                )}

                                <TextField
                                    type="text"
                                    name="family"
                                    onChange={handleChange}
                                    value={values.family}
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Nazwa rodziny"
                                    sx={{mt: 3}}
                                />
                                {errors.family && touched.family && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.family}</Alert>
                                )}

                                <TextField
                                    type="text"
                                    name="years"
                                    onChange={handleChange}
                                    value={values.years}
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Lata produkcji"
                                    sx={{mt: 3}}
                                />
                                {errors.years && touched.years && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.years}</Alert>
                                )}

                                <TextField
                                    type="text"
                                    name="image"
                                    onChange={handleChange}
                                    value={values.image}
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Nazwa zdjęcia"
                                    sx={{mt: 3}}
                                />
                                {errors.image && touched.image && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.image}</Alert>
                                )}

                                <TextField
                                    type="text"
                                    name="description"
                                    onChange={handleChange}
                                    value={values.description}
                                    id="outlined-multiline-static"
                                    label="Opis rodziny"
                                    fullWidth
                                    required
                                    multiline
                                    rows={5}
                                    sx={{mt: 3, mb: (touched.description && errors.description)  ? 0 : 3}}

                                />
                                {errors.description && touched.description && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.description}</Alert>
                                )}

                                <Box sx={{display: "flex", justifyContent: "center"}}>
                                    <Button
                                        style={{display: 'inline-block'}}
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting}>
                                        Dodaj
                                    </Button>
                                </Box>
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
    )
}

export default AddFamilyForm;