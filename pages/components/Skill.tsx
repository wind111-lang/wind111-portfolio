import React from 'react';
import { Box, Grid, Typography, Card} from '@mui/material';
import Image from "next/image";

const Skill: React.FC = () => {
const skills = ['C','Python','Java','Go','Gin','Gorm','Unity','Docker','Git','MariaDB']
        return (
            <>
                <Grid container>
                    <Grid item xs={12} md={6} lg={6} direction="row">
                        <Box sx={{ textAlign: 'center'}}>
                            <Typography variant="h4" sx={{marginTop:'30px'}}>
                                Skills
                            </Typography>
                            {skills.map((skill) =>
                                <Grid item direction="row" xs={3} sx={{ margin: 'auto'}}>
                                    <Card sx={{ margin: '0.7em', fontSize:"16px"}}>
                                        {skill}
                                    </Card>
                                </Grid>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image alt="coding" src="./coding.jpg" width={450} height={450}  />
                    </Grid>
                </Grid>
            </>
        )
}

export default Skill;