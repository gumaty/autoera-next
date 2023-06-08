import {Alert, Box, Button, Card, TextField, Typography} from "@mui/material";
import {Formik} from "formik";
import {useState} from "react";

function AddStudioForm(props) {

    const [isSuccess, setIsSuccess] = useState(false);

    let status;

    function handleSubmit(values, { setSubmitting }) {

        const brandData = {
            brand: values.brand,
            name: values.name,
            year: values.year,
            description: values.description,
            image: values.image,
        };

        props.onAddStudio(brandData);

        values.brand='';
        values.name='';
        values.year='';
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
                    initialValues={{ brand: '', name: '', year: '', description: '', image: '' }}
                    validate={values => {
                        const errors = {};

                        if (!values.brand) {
                            errors.brand = 'Required';
                        } else if (values.description.name < 1){
                            errors.brand = 'Marka powinno mieć conajmniej 2 znaki';
                        }

                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (values.description.name < 1){
                            errors.name = 'Nazwa powinno mieć conajmniej 2 znaki';
                        }

                        if (!values.year) {
                            errors.year = 'Required';
                        } else if (values.description.year < 3){
                            errors.year = 'Wiadomość powinno mieć conajmniej 4 znaki';
                        }

                        if (!values.description) {
                            errors.description = 'Required';
                        } else if (values.description.length < 9){
                            errors.description = 'Wiadomość powinno mieć conajmniej 10 znaków';
                        }

                        if (!values.image) {
                            errors.image = 'Required';
                        } else if (values.description.image < 2){
                            errors.image = 'Wiadomość powinno mieć conajmniej 3 znaki';
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
                                    label="Marka"
                                    sx={{mt: 3}}
                                />
                                {errors.brand && touched.brand && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.brand}</Alert>
                                )}

                                <TextField
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Model"
                                    sx={{mt: 3}}
                                />
                                {errors.name && touched.name && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.name}</Alert>
                                )}

                                <TextField
                                    type="text"
                                    name="year"
                                    onChange={handleChange}
                                    value={values.year}
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Rok prezentacji"
                                    sx={{mt: 3}}
                                />
                                {errors.year && touched.year && (
                                    <Alert sx={{mb: '10px'}} severity="warning">{errors.year}</Alert>
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
                                    label="Opis pojazdu"
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

export default AddStudioForm;