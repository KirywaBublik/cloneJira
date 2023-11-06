import {useState} from "react";

export const useFormData = () => {
    const [reportValue, setReportValue] = useState("");
    const [image, setImage] = useState();
    const [imageUrl, setImageUrl] = useState();

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        setImageUrl(fileReader.result);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];
            setImage(file);
            fileReader.readAsDataURL(file);
        }
    };

    const submitData = (data) => {
        if (image !== undefined) {
            const appendFile = {
                ...data,
                photo: image,
            };
        }
        setReportValue("");
        setImageUrl(false)
    };

    return {reportValue, setReportValue, image, imageUrl, submitForm, submitData};
};