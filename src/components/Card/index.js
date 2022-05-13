import React from 'react';
import { Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Card = ({ itemCard }) => {
    return (
        <CardMUI sx={{ maxWidth: 340 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {itemCard.author.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {itemCard.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{itemCard.tags}</Button>
                <Button href={itemCard.image} target="blank" size="small">image</Button>

            </CardActions>
        </CardMUI>


    );
};