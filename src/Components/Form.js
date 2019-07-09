import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import MultipleSelect from './multipleSelect';
import Header from './Header'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import ExpansionFam from './expansionFam';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


export default class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        korName: '',
        birth: '',
        address: '',
        city: '',
        zipCode: '',
        email: '',
        gender: 'Male',
        province: 'British Columbia',
        residenceStat: 'Citizenship',
        localPhone: '(1  )    -    ',
        cellPhone: '(1  )    -    ',
        job: '',
        company: '',
        carNumPlate: '',
        baptism: {
            babyBap: false,
            babyBapYear: '',
            babyBapChurch: '',
            bap: false,
            BapYear: '',
            BapChurch: '',
            crew: false,
            crewYear: '',
            crewChurch: ''
        },
        duty: '성도',
        preChurch: '',
        comeWith: '',
        volunteerArray: [],
        submitted: false,
        numMember: 0,
        members: [],
        fam_member: [],
        test: [],
    }

    increaseMember = (e) => {
        e.preventDefault()
        // console.log(this.state.members, "<<<this is increase value");
        this.setState({
            fam_member: {
                key: this.state.numMember
            }
        }, () => {
            this.setState({
                numMember: this.state.numMember + 1,
                members: [...this.state.members, this.state.fam_member],
            })
        })
    }

    decreaseMember = () => {
        const famMember_list = this.state.fam_member.filter(object=>object.famID!==this.state.numMember-1)
        const member_list = this.state.members.filter(object => object.key !== this.state.numMember - 1)
        this.setState({
            fam_member: famMember_list,
            members: member_list,
            numMember: this.state.numMember - 1,
        })
    }


    handleExtensionFam = (member) => {
        const clonedArray = this.state.test;
        let existMember = clonedArray.findIndex((el) => el.famID === member.famID);
        if (existMember !== -1) {
            clonedArray.splice(existMember, 1)
            clonedArray.push(member);
        } else {
            clonedArray.push(member);
        }
        clonedArray.sort((a,b)=>a.famID>b.famID?1:-1)
        existMember = null
        this.setState({
            fam_member: clonedArray
        })
    }

    handleMultipleSelect = (volunteerArray) => {
        this.setState({
            volunteerArray: volunteerArray
        })
    }

    handleChange = e => {
        const checkBox = e.target.type === 'checkbox';
        this.setState({
            [e.target.name]: checkBox
                ? e.target.checked
                : e.target.value
        });
    }
    toggleChip = e => {
        this.setState({
            [e.target.name]: !e.target.value
        })
    }
    TextMaskCustom(props) {
        const { inputRef, ...other } = props;
        return (
            <MaskedInput
                {...other}
                ref={ref => {
                    inputRef(ref ? ref.inputElement : null);
                }}
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                guide={true}
                showMask
            />
        );
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.handleSubmit(this.state);
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        })
    }
    render() {
        const textFieldStyle = {
            marginLeft: 20,
            width: 200
        }
        const formControlStyle = {
            marginLeft: 20,
            minWidth: 120
        }
        const selectStyle = {
            marginTop: 20,
        }
        const listStyle = {
            display: 'block',
            marginLeft: 20,
            marginRight: 20,
            padding: 8,
            border: '1px solid'
        }
        // console.log(this.state,"<<<this.state")
        const { submitted } = this.state;
        const members = this.state.members.map((fam_member, i) => {
            return (
                <div key={i}>
                    <ExpansionFam
                        famId={fam_member.key}
                        famMember={fam_member}
                        handleExtensionFam={this.handleExtensionFam}
                        handleChange={this.handleChange}
                    />
                    <br/>
                </div>
            );
        })
        return (
            <div>
            <Header/>
            <Container maxWidth="lg">
                {/* <Header/> */}
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    GCC 새가족 신청서
                    <br />
                    <div className="field">
                        <TextValidator
                            style={textFieldStyle}
                            name='firstName'
                            label="영문 이름/First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                        />
                        <TextValidator
                            style={textFieldStyle}
                            name='lastName'
                            label="영문 성/Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                        />
                        <TextValidator
                            style={textFieldStyle}
                            name='korName'
                            label="한국 성함/Korean Name"
                            value={this.state.korName}
                            onChange={this.handleChange}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                        />
                        <TextValidator
                            style={textFieldStyle}
                            name='birth'
                            type="date"
                            label="생년월일/Birth"
                            value={this.state.birth}
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                        />
                        <FormControl
                            style={formControlStyle}
                            component="fieldset"
                        >
                            <FormLabel component="legend" required>Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={this.state.gender}
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
                    <div className="field">
                        <TextValidator
                            style={textFieldStyle}
                            name='address'
                            label="주소/Address"
                            value={this.state.address}
                            onChange={this.handleChange}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                        />
                        <TextValidator
                            style={textFieldStyle}
                            name='city'
                            label="도시/City"
                            value={this.state.city}
                            onChange={this.handleChange}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                        />
                        <FormControl
                            style={formControlStyle}
                            required >
                            <InputLabel htmlFor="age-required">주/Province</InputLabel>
                            <Select
                                style={selectStyle}
                                value={this.state.province}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "province"
                                }}
                            >
                                <MenuItem value="British Columbia">
                                    <em>British Columbia</em>
                                </MenuItem>
                                <MenuItem value="Alberta">Alberta</MenuItem>
                                <MenuItem value="Ontario">Ontario</MenuItem>
                                <MenuItem value="Quebec">Quebec</MenuItem>
                                <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
                                <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
                                <MenuItem value="Manitoba">Manitoba</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <TextValidator
                            style={textFieldStyle}
                            name='zipCode'
                            label="우편번호/Zipcode"
                            value={this.state.zipCode}
                            onChange={this.handleChange}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                        />
                        <FormControl
                            style={formControlStyle}
                            required >
                            <InputLabel htmlFor="age-required">주/Province</InputLabel>
                            <Select
                                style={selectStyle}
                                value={this.state.residenceStat}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "residenceStat"
                                }}
                            >
                                <MenuItem value="Citizenship">
                                    <em>Citizenship</em>
                                </MenuItem>
                                <MenuItem value="Permenent Residence">Permenent Residence</MenuItem>
                                <MenuItem value="Visitor">Visitor</MenuItem>
                                <MenuItem value="Work Permit">Work Permit</MenuItem>
                                <MenuItem value="Student Visa">Student Visa</MenuItem>
                                <MenuItem value="Working Holiday">Working Holiday</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="field">
                        <FormControl
                            style={formControlStyle}>
                            <InputLabel htmlFor="formatted-text-mask-input">집전화/Local Phone</InputLabel>
                            <Input
                                name="localPhone"
                                value={this.state.localPhone}
                                onChange={this.handleChange}
                                inputComponent={this.TextMaskCustom}
                            />
                        </FormControl>
                        <FormControl
                            style={formControlStyle}
                            required>
                            <InputLabel htmlFor="formatted-text-mask-input">휴대전화/Cell Phone</InputLabel>
                            <Input
                                name="cellPhone"
                                value={this.state.cellPhone}
                                onChange={this.handleChange}
                                inputComponent={this.TextMaskCustom}
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <TextValidator
                            style={textFieldStyle}
                            name='email'
                            label="이메일/e-mail"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="id@email.com"
                            // validators={['required', 'isEmail']}
                            // errorMessages={['this field is required', 'email is not valid']}
                        />
                        <TextField
                            style={textFieldStyle}
                            name='job'
                            label="직업/Occupation"
                            value={this.state.job}
                            onChange={this.handleChange}
                        />
                        <TextField
                            style={textFieldStyle}
                            name='company'
                            label="직장/Company"
                            value={this.state.company}
                            onChange={this.handleChange}
                        />
                        <TextField
                            style={textFieldStyle}
                            name='carNumPlate'
                            label="차량번호/Number Plate"
                            value={this.state.carNumPlate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br/>
                    <div className="field2">
                        <List className="BapCheck"
                            style={listStyle}>
                            <ListItem>
                                <ListItemIcon>
                                    <Checkbox name="babyBap" value={this.state.babyBap} onChange={this.handleChange} /> 유아세례
                            </ListItemIcon>
                                <TextField
                                    stlye={textFieldStyle}
                                    name="babyBapYear"
                                    disabled={!this.state.babyBap}
                                    value={this.state.babyBapYear}
                                    onChange={this.handleChange}
                                    placeholder="년도"
                                />
                                <TextField
                                    stlye={textFieldStyle}
                                    name="babyBapChurch"
                                    disabled={!this.state.babyBap}
                                    value={this.state.babyBapChurch}
                                    onChange={this.handleChange}
                                    placeholder="교회"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Checkbox name="bap" value={this.state.bap} onChange={this.handleChange} /> 세례
                            </ListItemIcon>
                                <TextField
                                    stlye={textFieldStyle}
                                    name="BapYear"
                                    disabled={!this.state.bap}
                                    value={this.state.BapYear}
                                    onChange={this.handleChange}
                                    placeholder="년도"
                                />
                                <TextField
                                    stlye={textFieldStyle}
                                    name="BapChurch"
                                    disabled={!this.state.bap}
                                    value={this.state.BapChurch}
                                    onChange={this.handleChange}
                                    placeholder="교회"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Checkbox name="crew" value={this.state.crew} onChange={this.handleChange} /> 입교
                            </ListItemIcon>
                                <TextField
                                    stlye={textFieldStyle}
                                    name="crewYear"
                                    disabled={!this.state.crew}
                                    value={this.state.crewYear}
                                    onChange={this.handleChange}
                                    placeholder="년도"
                                />
                                <TextField
                                    stlye={textFieldStyle}
                                    name="crewChurch"
                                    disabled={!this.state.crew}
                                    value={this.state.crewChurch}
                                    onChange={this.handleChange}
                                    placeholder="교회"
                                />
                            </ListItem>
                        </List>

                        <FormControl
                            style={formControlStyle}
                            required>
                            <InputLabel htmlFor="age-required">직분</InputLabel>
                            <Select
                                style={selectStyle}
                                value={this.state.duty}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "duty"
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
                        <TextField
                            style={textFieldStyle}
                            name="preChurch"
                            value={this.state.preChurch}
                            onChange={this.handleChange}
                            label="이전교회/Previous Church"
                        />
                        <TextField
                            style={textFieldStyle}
                            name="comeWith"
                            value={this.state.comeWith}
                            onChange={this.handleChange}
                            label="인도자 or 교회지인"
                        />
                        <MultipleSelect handleMultipleSelect={this.handleMultipleSelect} />
                    </div>
                    <br />
                    {/* add family member */}
                    {members}
                    <Tooltip title="Add" aria-label="Add">
                        <Fab color="primary">
                            <AddIcon onClick={this.increaseMember} />
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={this.decreaseMember} />
                        </IconButton>
                    </Tooltip>
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={submitted}
                    >
                        {
                            (submitted && 'Your form is submitted!')
                            || (!submitted && 'Submit')
                        }
                    </Button>
                </ValidatorForm>
            </Container>
            </div>
        )
    }

}
