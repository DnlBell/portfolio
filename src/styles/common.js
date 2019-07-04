import { Button, Box } from "@material-ui/core";
import { styled } from '@material-ui/styles';

export const PrimaryButton = styled(Button)({
    background: 'linear-gradient(45deg, #00897b 100%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px lightGrey',
    color: 'lightGrey',
    padding: '8px 20px',
});
  
export const SecondaryButton = styled(Button)({
    background: 'linear-gradient(45deg, #ffa000 100%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px lightGrey',
    color: 'grey',
    padding: '8px 20px',
    marginLeft: '10px'
});
  
export const ContentBox = styled(Box)({
    display: "flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
});

  