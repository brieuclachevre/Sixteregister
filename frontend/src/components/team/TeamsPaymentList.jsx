import { Button, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const TeamPaymentList = ({ columns, teams, modify, onModify, disabled }) => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow variant="head">
                        {columns.map((column, index) => (
                            <TableCell key={index} align={column?.align}>{column?.label}</TableCell>
                        ))}
                        {modify && <TableCell align="center">Paiement</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teams && teams?.length !== 0 ? teams.map((team, indexT) => (
                        <TableRow key={indexT}>
                            {columns.map((column, indexC) => (
                                column?.type === "status" ?
                                    <TableCell key={indexC} align={column?.align}>{team[column?.key] === "Validated" ? <Chip label="Validé" color='primary' /> : team[column?.key] === "PrincipalList" ? <Chip label="Liste principale" color='primary' /> : <Chip label="En attente" color='error' />}</TableCell>
                                    :
                                    column?.type === "index" ?
                                        <TableCell key={indexC} align={column?.align}>
                                            {indexT + 1}
                                        </TableCell>
                                        :
                                        <TableCell key={indexC} align={column?.align}>{team[column?.key]}</TableCell>
                            ))}
                            {modify && <TableCell align="center">{!disabled(team) ? <Button variant='outlined' onClick={() => onModify(team)}>Payer</Button> : <Chip label="Validé" color='success' />}</TableCell>}
                        </TableRow>
                    )) :
                        <TableRow>
                            <TableCell colSpan={columns?.length + (modify ? 1 : 0)} align="center">
                                <Typography component="h2" sx={{ color: 'divider', marginTop: '1rem' }}>
                                    Aucune équipe
                                </Typography>
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer >
    );
}

TeamPaymentList.propTypes = {
    teams: PropTypes.array,
    headerItem: PropTypes.element,
    columns: PropTypes.array.isRequired,
    modify: PropTypes.bool.isRequired,
    onModify: PropTypes.func,
    disabled: PropTypes.func
};

export default TeamPaymentList;