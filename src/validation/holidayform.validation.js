import * as yup from 'yup';

const holidayformSchema = yup.object({
    name: yup.string().required("name is required"),
    start_date: yup.date().required("Start Date is required"),
    end_date: yup.date().required('End Date is required'),
    description:yup.string().required('Description is required'),
    type:yup.string().uppercase().required('Type is required'),
})

export default holidayformSchema;