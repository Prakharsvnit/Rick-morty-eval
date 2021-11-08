import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const CharacterCard = ({name,status,species,image}) => {
    return (
        
        <Box sx={{ width:400,mx:"auto",flexDirection:"row",flexGrow:1}} >
            <Card sx={{display:"flex",flexDirection:"row"}}>
                    <CardMedia component="img" sx={{width:400,height:"50%",border:2}} src={image} alt="img"/>
            <CardContent >
                <Typography>
                    <h1 sx={{textAlign:"left"}}>Name:{name}</h1>
                    <h2>Status:{status}</h2>
                    <h2>Species:{species}</h2>
                </Typography>
            </CardContent>
            </Card>
        </Box>
    )
}

export default CharacterCard
