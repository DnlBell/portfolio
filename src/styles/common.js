import { Button, Box, Chip } from "@material-ui/core";
import { styled } from '@material-ui/styles';

export const PrimaryButton = styled(Button)({
    background: 'linear-gradient(45deg, #009688 100%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px lightGrey',
    color: 'white',
    padding: '6px 15px',
    margin: '4px'
});
  
export const SecondaryButton = styled(Button)({
    background: 'linear-gradient(45deg, #ffa000 100%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px lightGrey',
    color: 'black',
    padding: '6px 15px',
    margin: '4px'
});
  
export const ContentBox = styled(Box)({
    display: "flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
});

export const SkillChip = styled(Chip)({
    marginLeft: 4,
    marginTop: 4
});