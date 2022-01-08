import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useCartContext from '../context/cartContext';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Cart()  {
  const classes = useStyles();
  const { itemsCart} = useCartContext()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Imagen</StyledTableCell>
            <StyledTableCell align="right">Producto</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsCart.map((row) => (
            <StyledTableRow key={row.nombre}>     
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.producto}</StyledTableCell>
              <StyledTableCell align="right">{row.precio}</StyledTableCell>
              <StyledTableCell align="right">{row.cantidad}</StyledTableCell>
              <StyledTableCell align="right">{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




