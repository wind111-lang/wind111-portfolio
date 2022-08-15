import React from 'react';
import { Box, Typography, Button, Card, Grid } from '@mui/material'
import Chat from "./chat.jpg"

const Product: React.FC = () => {

        return (
            <>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h4" sx={{ textAlign: "center", marginTop: "20px" }}>
                            Product
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Card sx={{ margin: '0.7em', fontSize: "16px" }}>
                                <Typography variant="h5" sx={{ marginTop: "20px" }}>
                                    Chat
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
}

export default Product;