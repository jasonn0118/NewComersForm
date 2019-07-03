import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["안내",
        "성가대",
        "주방봉사",
        "디자인",
        "실버사역",
        "영어권 주일학교 교사",
        "한어권 주일학교 교사",
        "중보기도",
        "시설관리",
        "재정관리",
        "주차안내",
        "찬양팀",
        "선교/전도",
        "방송",
        "IT",
        "조경",
        "행정 및 문서",
        "기타"]

   function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

export default function MultipleSelect(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    function handleChange(event) {
      setPersonName(event.target.value);
      console.log('~~~~~~~~~',personName);
      props.handleMultipleSelect(personName);      
    }
    return(
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">봉사/Volunteer</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}