import {Button} from "primereact/button";
import React, {useContext, useRef, useState} from "react";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {UserContext} from "../contexts/user.context";
import {Toast} from "primereact/toast";
import {classNames} from "primereact/utils";

export function DataForm(){
    let emptyProduct = {
        name: '',
        description: ''
    };

    const {user} = useContext(UserContext);
    const [submitted, setSubmitted] = useState(false);
    const [productDialog, setProductDialog] = useState(false);
    const toast = useRef(null);
    const [product, setProduct] = useState(emptyProduct);



    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };



    const saveProduct = async () => {
        setSubmitted(true);
        if (product.name.trim()) {
            let _product = {...product};
            const functionName = "putProductInfo";
            const args = [_product];
            let result = await user.callFunction(functionName, ...args);
            result = JSON.parse(JSON.stringify(result));
            _product.id = result['insertedId'];
            toast.current.show({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideProductDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    function hideProductDialog() {
        setSubmitted(false);
        setProductDialog(false);
    }



    return(

        <div>
            <Toast ref={toast} />
            <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
            <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideProductDialog}>
                {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Name
                    </label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Experiment Info
                    </label>
                    <InputText id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.experimentInfo })} />
                </div>

            </Dialog>
        </div>
    );
}