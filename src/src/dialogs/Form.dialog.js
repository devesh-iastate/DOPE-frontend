import {Button} from "primereact/button";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Dialog} from "primereact/dialog";
import {InputTextarea} from "primereact/inputtextarea";
import {TabPanel, TabView} from "primereact/tabview";
import {UserContext} from "../contexts/user.context";
import {Toast} from "primereact/toast";

export function UpdateProductInfo({rowData}) {

    const [showProductInfo, setShowProductInfo] = useState(false);
    const [formData, setFormData] = useState( null);
    const toast = useRef(null);
    const { user} = useContext(UserContext);

    useEffect(()=>{
        setFormData({
            ...rowData
        })
    },[])


    function hideProductInfo() {
        setFormData({...rowData})
        setShowProductInfo(false);
    }
    const openNew = () => {
            setShowProductInfo(true);

        };

    const saveProduct = async () => {
        try{
            const functionName = "updateProductInfo";
            const args = {...formData};
            await user.callFunction(functionName, args);
            toast.current.show({severity: 'success', summary: 'Successful', detail: 'Product Info Updated', life: 3000});
            setShowProductInfo(false);
        }catch (e) {
            toast.current.show({severity: 'error', summary: 'Error', detail: 'Error in updating product info', life: 3000});
        }

    }

    const setFormDataValue = (key, value) => {
        setFormData(prev => ({...prev, [key]: value}));
    }
    return(
        <div>
            <Toast ref={toast} />
            <Button icon="pi pi-plus" rounded outlined className="mr-2" onClick={openNew} />
            <Dialog visible={showProductInfo} onHide={hideProductInfo} header="Product Info">
                <TabView scrollable>
                    <TabPanel header="Type A">
                        <div>
                            <div className="field">
                                <label className="font-bold">
                                    Polymer Info
                                </label><br/>
                                <InputTextarea name='polymerInfo' autoResize value={formData?.polymerInfo} onChange={e=> setFormDataValue(e.target.name, e.target.value)} required rows={3} cols={20} />
                            </div>
                            <Button label="Submit" onClick={saveProduct}/>
                        </div>
                    </TabPanel>
                </TabView>
            </Dialog>
        </div>

    )

}