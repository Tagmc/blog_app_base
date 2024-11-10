import { Typography } from "@mui/material";
export default function Header() {
    return (
        <Typography
            variant="h4" 
            sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: 'white',
                marginBottom: 5,
                fontWeight: 'lighter',
                padding: '5px 0',
            }} 
            align="center" 
        >
            Blogs
        </Typography>
    )
}