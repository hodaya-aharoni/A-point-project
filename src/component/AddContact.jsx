import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Box, Button, TextField, Select, MenuItem, Typography, Divider, IconButton, Accordion, AccordionSummary, AccordionDetails, ListItemIcon } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { addContactToArr } from "../app/contactSlice";

const phoneTypes = ["Mobile", "Work", "Home"];
const emailTypes = ["Private", "Work", "Other"];
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

const AddContact = ({ onClose, contact, isEdit}) => {
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
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h6" mb={2}>New Contact</Typography>
            <Box display="flex" gap={1} mb={2}>
                <TextField label="First Name"
                    {...register("firstName", { required: "Required" })}
                    disabled={isEdit} error={!!errors.firstName} value={contact.firstName} fullWidth />
                <TextField label="Last Name" {...register("lastName", { required: "Required" })}
                value={contact.lastName}
                    disabled={isEdit} error={!!errors.lastName} fullWidth />
            </Box>
            <Box display="flex" gap={1} mb={2}>
                <TextField label="Role" {...register("role")} disabled={isEdit} value={contact.role} fullWidth />
                <Select {...register("contactType")} defaultValue="contractor" value={contact.contactType} fullWidth>
                    <MenuItem value="">   </MenuItem> 
                    <MenuItem value="Cleaner">Cleaner</MenuItem>
                    <MenuItem value="Gardener">Gardener</MenuItem>
                    <MenuItem value="Electrician">Electrician</MenuItem>
                    <MenuItem value="Plumber">Plumber</MenuItem>
                    <MenuItem value="Contractor">Contractor</MenuItem>
                    <MenuItem value="Tenant">Tenant</MenuItem>
                    <MenuItem value="Owner">Owner</MenuItem>
                    <MenuItem value="Resident">Resident</MenuItem>
                </Select>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Language & Contact</AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" gap={1} mb={2}>
                        <Select {...register("language")} disabled={isEdit} value={contact.language} fullWidth>
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
                            <TextField label="Phone" {...register(`phones.${index}.number`)} disabled={isEdit} value={contact.phones} fullWidth />
                            <Select {...register(`phones.${index}.type`)} defaultValue="Work">
                                {phoneTypes.map(type => (
                                    <MenuItem key={type} value={type}>{type}</MenuItem>
                                ))}
                            </Select>
                            <IconButton onClick={() => removePhone(index)}><DeleteIcon /></IconButton>
                        </Box>
                    ))}
                    <Button onClick={() => addPhone({ number: "", type: "Work" })} disabled={isEdit}>+ Add Phone</Button>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1">Email</Typography>
                    {emailFields.map((field, index) => (
                        <Box display="flex" gap={1} alignItems="center" mb={1} key={field.id}>
                            <TextField label="Email" {...register(`emails.${index}.address`)} disabled={isEdit} value={contact.emails} fullWidth />
                            <Select {...register(`emails.${index}.type`)} defaultValue="Private">
                                {emailTypes.map(type => (
                                    <MenuItem key={type} value={type}>{type}</MenuItem>
                                ))}
                            </Select>
                            <IconButton onClick={() => removeEmail(index)}><DeleteIcon /></IconButton>
                        </Box>
                    ))}
                    <Button onClick={() => addEmail({ address: "", type: "Private" })} disabled={isEdit}>+ Add Email</Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Mailing Address</AccordionSummary>
                <AccordionDetails>
                    <TextField label="Address" {...register("address")} value={contact.address} fullWidth />
                    <TextField label="Comment" {...register("comment")} fullWidth value={contact.comment}/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Billing Information</AccordionSummary>
                <AccordionDetails>
                    <TextField label="Name of Invoice" {...register("invoiceName")} value={contact.address} fullWidth />
                    <TextField label="Accounting Ref" {...register("accountingRef")} fullWidth value={contact.accountingRef} />
                    <TextField label="VAT Number" {...register("vatNumber")} value={contact.vatNumber} fullWidth />
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