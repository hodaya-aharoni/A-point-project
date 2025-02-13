// import React from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { Box, Button, TextField, Select, MenuItem, Typography, Divider, IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useDispatch } from "react-redux";
// import { addContactToArr } from "../app/contactSlice"; 

// const AddContact = ({ onClose }) => {
//     const dispatch = useDispatch();
//     const { register, control, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             firstName: "", lastName: "", role: "", contactType: "contractor",
//             phones: [{ number: "", type: "Work" }],
//             emails: [{ address: "", type: "Private" }],
//             address: "",
//         }
//     });

//     const { fields: phoneFields, append: addPhone, remove: removePhone } = useFieldArray({ control, name: "phones" });
//     const { fields: emailFields, append: addEmail, remove: removeEmail } = useFieldArray({ control, name: "emails" });

//     const onSubmit = (data) => {
//         dispatch(addContactToArr(data));


        
//         console.log("Submitted Data:", data);
//         onClose();
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Typography variant="h6" mb={2}>New Contact</Typography>

//             <Box display="flex" gap={1} mb={2}>
//                 <TextField label="First Name" {...register("firstName", { required: "Required" })} error={!!errors.firstName} helperText={errors.firstName?.message} fullWidth />
//                 <TextField label="Last Name" {...register("lastName", { required: "Required" })} error={!!errors.lastName} helperText={errors.lastName?.message} fullWidth />
//             </Box>

//             <Box display="flex" gap={1} mb={2}>
//                 <TextField label="Role" {...register("role")} fullWidth />
//                 <Select {...register("contactType")} defaultValue="contractor" fullWidth>
//                     <MenuItem value="contractor">Contractor</MenuItem>
//                     <MenuItem value="manager">Manager</MenuItem>
//                 </Select>
//             </Box>

//             <Divider sx={{ my: 2 }} />
//             <Typography variant="subtitle1">Phone</Typography>
//             {phoneFields.map((field, index) => (
//                 <Box display="flex" gap={1} alignItems="center" mb={1} key={field.id}>
//                     <TextField label="Phone" {...register(`phones.${index}.number`, { required: "Required" })} error={!!errors.phones?.[index]?.number} fullWidth />
//                     <Select {...register(`phones.${index}.type`)} defaultValue="Work">
//                         <MenuItem value="Work">Work</MenuItem>
//                         <MenuItem value="Home">Home</MenuItem>
//                     </Select>
//                     <IconButton onClick={() => removePhone(index)}><DeleteIcon /></IconButton>
//                 </Box>
//             ))}
//             <Button onClick={() => addPhone({ number: "", type: "Work" })}>+ Add</Button>

//             <Divider sx={{ my: 2 }} />
//             <Typography variant="subtitle1">Email</Typography>
//             {emailFields.map((field, index) => (
//                 <Box display="flex" gap={1} alignItems="center" mb={1} key={field.id}>
//                     <TextField label="Email" {...register(`emails.${index}.address`, { required: "Required" })} error={!!errors.emails?.[index]?.address} fullWidth />
//                     <Select {...register(`emails.${index}.type`)} defaultValue="Private">
//                         <MenuItem value="Private">Private</MenuItem>
//                         <MenuItem value="Work">Work</MenuItem>
//                     </Select>

//                     <IconButton onClick={() => removeEmail(index)}><DeleteIcon /></IconButton>
//                 </Box>
//             ))}
//             <Button onClick={() => addEmail({ address: "", type: "Private" })}>+ Add</Button>

//             <Divider sx={{ my: 2 }} />
//             <TextField label="Mailing Address" {...register("address")} fullWidth />

//             <Box display="flex" justifyContent="space-between" mt={3}>
//                 <Button onClick={onClose} variant="outlined">Cancel</Button>
//                 <Button type="submit" variant="contained">Save</Button>
//             </Box>
//         </form>
//     );
// };

// export default AddContact;
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    Typography,
    Divider,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    ListItemIcon
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { addContactToArr } from "../app/contactSlice";

const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "French", flag: "🇫🇷" },
    { code: "es", label: "Spanish", flag: "🇪🇸" },
    { code: "de", label: "German", flag: "🇩🇪" },
    { code: "it", label: "Italian", flag: "🇮🇹" },
    { code: "ru", label: "Russian", flag: "🇷🇺" },
    { code: "zh", label: "Chinese", flag: "🇨🇳" },
    { code: "ja", label: "Japanese", flag: "🇯🇵" },
    { code: "he", label: "Hebrew", flag: "🇮🇱" },
    { code: "ar", label: "Arabic", flag: "🇸🇦" },
];

const AddContact = ({ onClose }) => {
    const dispatch = useDispatch();
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "", lastName: "", role: "", contactType: "contractor",
            language: "en",
            phones: [{ number: "", type: "Work" }],
            emails: [{ address: "", type: "Private" }],
            address: "", comment: "", invoiceName: "", accountingRef: "", vatNumber: ""
        }
    });

    const { fields: phoneFields, append: addPhone, remove: removePhone } = useFieldArray({ control, name: "phones" });
    const { fields: emailFields, append: addEmail, remove: removeEmail } = useFieldArray({ control, name: "emails" });

    const onSubmit = (data) => {
        dispatch(addContactToArr(data));
        console.log("Submitted Data:", data);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h6" mb={2}>New Contact</Typography>
            <Box display="flex" gap={1} mb={2}>
                <TextField label="First Name" {...register("firstName", { required: "Required" })} error={!!errors.firstName} fullWidth />
                <TextField label="Last Name" {...register("lastName", { required: "Required" })} error={!!errors.lastName} fullWidth />
            </Box>
            <Box display="flex" gap={1} mb={2}>
                <TextField label="Role" {...register("role")} fullWidth />
                <Select {...register("contactType")} defaultValue="contractor" fullWidth>
                    <MenuItem value="contractor">Contractor</MenuItem>
                    <MenuItem value="manager">Manager</MenuItem>
                </Select>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Language & Contact</AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" gap={1} mb={2}>
                        <Select {...register("language")} fullWidth>
                            {languages.map(lang => (
                                <MenuItem key={lang.code} value={lang.code}>
                                    <ListItemIcon>{lang.flag}</ListItemIcon>
                                    {lang.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1">Phone</Typography>
                    {phoneFields.map((field, index) => (
                        <Box display="flex" gap={1} alignItems="center" mb={1} key={field.id}>
                            <TextField label="Phone" {...register(`phones.${index}.number`)} fullWidth />
                            <IconButton onClick={() => removePhone(index)}><DeleteIcon /></IconButton>
                        </Box>
                    ))}
                    <Button onClick={() => addPhone({ number: "" })}>+ Add Phone</Button>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1">Email</Typography>
                    {emailFields.map((field, index) => (
                        <Box display="flex" gap={1} alignItems="center" mb={1} key={field.id}>
                            <TextField label="Email" {...register(`emails.${index}.address`)} fullWidth />
                            <IconButton onClick={() => removeEmail(index)}><DeleteIcon /></IconButton>
                        </Box>
                    ))}
                    <Button onClick={() => addEmail({ address: "" })}>+ Add Email</Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Mailing Address</AccordionSummary>
                <AccordionDetails>
                    <TextField label="Address" {...register("address")} fullWidth />
                    <TextField label="Comment" {...register("comment")} fullWidth />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Billing Information</AccordionSummary>
                <AccordionDetails>
                    <TextField label="Name of Invoice" {...register("invoiceName")} fullWidth />
                    <TextField label="Accounting Ref" {...register("accountingRef")} fullWidth />
                    <TextField label="VAT Number" {...register("vatNumber")} fullWidth />
                </AccordionDetails>
            </Accordion>
            <Box display="flex" justifyContent="space-between" mt={3}>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">Save</Button>
            </Box>
        </form>
    );
};

export default AddContact;
