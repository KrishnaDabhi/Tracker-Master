
import * as yup from 'yup';

const leaveformSchema = yup.object({
    start_date:yup.string().required("Start Date is required"),
    end_date: yup.date().required('End Date is required'),
    description:yup.string().required('Description is required'),
    type:yup.string().uppercase().required('Type is required'),
    // isPaid:yup.boolean().required('is_paid is required'),
    updated_by:yup.string().required('updated_by is required'),
    user:yup.string().required('updated_by is required'),
})

export default leaveformSchema;