import AddBrandForm from "@/components/forms/AddBrandForm";
function AddBrand() {

    function addBrandHandler(brandData) {
        fetch(
            'https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/marki.json',
            {
                method: 'POST',
                body: JSON.stringify(brandData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            console.log("Marka dodana")
        });
    }

    return (
        <section>
            <h1>Nowa marka</h1>
            <AddBrandForm onAddBrand={addBrandHandler} />
        </section>
    );


}

export default AddBrand;