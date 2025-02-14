import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Fade,Slide } from "@mui/material";
import LayoutUnauthenticated from "../../components/layouts/LayoutUnauthenticated";
import Apropos from "../../components/Home/apropos";
import Deroulementjournee from "../../components/Home/deroulementjournee";
import Sixtemen from "../../components/Home/sixtemen";
import Apropos from "../../components/Home/apropos";
import Statistics from "../../components/Home/statistics";
const Home = () => {
    const isDarkMode = false;



    return (
        <LayoutUnauthenticated isDarkMode={isDarkMode}>
            <Box sx={{height:'200vh'}}> 
                <Apropos/>
                <Deroulementjournee/>

                <Sixtemen/>

                <Statistics/>
            </Box>
        </LayoutUnauthenticated>
    );
};

export default Home;
