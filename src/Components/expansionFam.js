import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import MultipleSelect from './multipleSelect';


export default class expansionFam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            famID : this.props.famId,
            memberInChurch: 'No',
            memberUsedTo: 'No',
            relationship: 'spouse',
            memKor: "",
            memEng: "",
            memBirth: "",
            memGender: "Male",
            memJob: "",
            memCompany: "",
            memBabyBap: false,
            memBap: false,
            memCrew: false,
            memBaptism: {
                memBabyBapYear: '',
                memBabyBapChurch: '',
                memBapYear: '',
                memBapChurch: '',
                memCrewYear: '',
                memCrewChurch: ''
            },
            memDuty: "",
            memVolunArray: [],
        }

    }

    
    handleMultipleSelect = (memVolunteerArray) => {
        this.setState({
            memVolunteerArray: memVolunteerArray
        })
    }

    handleChange = e => {
        
        const checkBox = e.target.type === 'checkbox';
        this.setState({
            [e.target.name]: checkBox
                ? e.target.checked
                : e.target.value
        }, ()=> this.props.handleExtensionFam(this.state));
    }
    


    render() {
        // console.log(this.state, "<<<this is expansionFam")
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Add Family</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div>
                            <FormControl
                                // style={formStyle}
                                component="fieldset"
                            >
                                <FormLabel component="legend" required>Member in Church</FormLabel>
                                <RadioGroup
                                    aria-label="memberInChurch"
                                    name="memberInChurch"
                                    value={this.state.memberInChurch}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                            <FormControl
                                component="fieldset"
                            // style={formStyle}
                            >
                                <FormLabel component="legend" required>Used to be a member</FormLabel>
                                <RadioGroup
                                    aria-label="memberUsedTo"
                                    name="memberUsedTo"
                                    value={this.state.memberUsedTo}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="No"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl
                                // style={formStyle}
                                required >
                                <InputLabel htmlFor="age-required">관계/RelationWith</InputLabel>
                                <Select
                                    value={this.state.relationship}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: "relationship"
                                    }}
                                >
                                    <MenuItem value="Spouse">
                                        <em>Spouse</em>
                                    </MenuItem>
                                    <MenuItem value="Children">Children</MenuItem>
                                    <MenuItem value="GrandParents">GrandParents</MenuItem>
                                    <MenuItem value="GrandChild">GrandChild</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                            <TextField
                                name="memKor"
                                label="한국성함/Korean Name"
                                value={this.state.memKor}
                                onChange={this.handleChange}
                            />
                            <TextField
                                name="memEng"
                                label="영문성함/English Name"
                                value={this.state.memEng}
                                onChange={this.handleChange}
                            />
                            <TextField
                                name="memBirth"
                                label="생년월일/Birth"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.state.memBirth}
                                onChange={this.handleChange}
                            />
                            <FormControl
                                component="fieldset"
                            >
                                <FormLabel component="legend" required>Gender</FormLabel>
                                <RadioGroup
                                    aria-label="memGender"
                                    name="memGender"
                                    value={this.state.memGender}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel
                                        value="Female"
                                        control={<Radio color="primary" />}
                                        label="Female"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Male"
                                        control={<Radio color="primary" />}
                                        label="Male"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                name="memJob"
                                label="직업/Job"
                                value={this.state.memJob}
                                onChange={this.handleChange}
                            />
                            <TextField
                                name="memCompany"
                                label="회사/Company"
                                value={this.state.memCompany}
                                onChange={this.handleChange}
                            />
                            <List className="BapCheck">
                                <ListItem>
                                    <ListItemIcon>
                                        <Checkbox name="memBabyBap" value={this.state.memBabyBap} onChange={this.handleChange} /> 유아세례
                            </ListItemIcon>
                                    <TextField
                                        name="memBabyBapYear"
                                        disabled={!this.state.memBabyBap}
                                        value={this.state.memBaptism.memBabyBapYear}
                                        onChange={this.handleChange}
                                        placeholder="년도"
                                    />
                                    <TextField
                                        name="memBabyBapChurch"
                                        disabled={!this.state.memBabyBap}
                                        value={this.state.memBaptism.memBabyBapChurch}
                                        onChange={this.handleChange}
                                        placeholder="교회"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Checkbox name="memBap" value={this.state.memBap} onChange={this.handleChange} /> 세례
                            </ListItemIcon>
                                    <TextField
                                        name="memBapYear"
                                        disabled={!this.state.memBap}
                                        value={this.state.memBaptism.memBapYear}
                                        onChange={this.handleChange}
                                        placeholder="년도"
                                    />
                                    <TextField
                                        name="memBapChurch"
                                        disabled={!this.state.memBap}
                                        value={this.state.memBaptism.memBapChurch}
                                        onChange={this.handleChange}
                                        placeholder="교회"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Checkbox name="memCrew" value={this.state.memCrew} onChange={this.handleChange} /> 입교
                            </ListItemIcon>
                                    <TextField
                                        name="memCrewYear"
                                        disabled={!this.state.memCrew}
                                        value={this.state.memBaptism.memCrewYear}
                                        onChange={this.handleChange}
                                        placeholder="년도"
                                    />
                                    <TextField
                                        name="memCrewChurch"
                                        disabled={!this.state.memCrew}
                                        value={this.state.memBaptism.memCrewChurch}
                                        onChange={this.handleChange}
                                        placeholder="교회"
                                    />
                                </ListItem>
                            </List>
                            <FormControl required>
                            <InputLabel htmlFor="age-required">직분</InputLabel>
                            <Select
                                value={this.state.memDuty}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "memDuty"
                                }}
                            >
                                <MenuItem value="성도">
                                    <em>성도</em>
                                </MenuItem>
                                <MenuItem value="서리집사">서리집사</MenuItem>
                                <MenuItem value="안수집사">안수집사</MenuItem>
                                <MenuItem value="권사">권사</MenuItem>
                                <MenuItem value="장로">장로</MenuItem>
                                <MenuItem value="전도사">전도사</MenuItem>
                                <MenuItem value="목사">목사</MenuItem>
                                <MenuItem value="사모">사모</MenuItem>
                                <MenuItem value="선교사">선교사</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <MultipleSelect handleMultipleSelect = {this.handleMultipleSelect}/>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}