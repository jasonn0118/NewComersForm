import React, { Component } from 'react';
import MutipleSelect from './multipleSelect';
// import './Form.css';
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
import { Chip } from '@material-ui/core';
import MultipleSelect from './multipleSelect';



export default class Form extends Component {
    
   
   state={
       firstName:'',
       lastName : '',
       korName : '',
       birth : '',
       gender :'Male',
       address : '',
       city:'',
       zipCode:'',
       province: 'British Columbia',
       residenceStat:'Citizenship',
       localPhone:'(1  )    -    ',
       cellPhone:'(1  )    -    ',
       email:'',
       job:'',
       company:'',
       carNumPlate:'',
       baptism:{
        babyBap:false,
        babyBapYear:'',
        babyBapChurch:'',
        bap: false,
        BapYear:'',
        BapChurch:'',
        crew:false,
        crewYear:'',
        crewChurch:''},
       duty:'성도',
       preChurch:'',
       comeWith:'',
       volunteer:{},
       volunteerArray: []
   }

   handleMultipleSelect = (volunteerArray) => {
       console.log('^^^^^^^^^^^^^^^^^^^^^^^^', volunteerArray);
       this.setState({
           volunteerArray
       })
   }

   handleChange=e=>{
       const checkBox = e.target.type ==='checkbox';
       this.setState({
            [e.target.name]: checkBox
            ? e.target.checked
            : e.target.value
       });
   }
   handleSelectChange=value=>{
        this.setState({
            
        })
    }
   toggleChip=e=>{
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
   
  
  
  
   onSubmit=(e)=>{
       e.preventDefault();
       console.log(this.state);
       this.props.onSubmit(this.state);
       this.setState({
        firstName:'',
        lastName : '',
        korName : '',
        birth : '',
        gender :'Male',
        address : '',
        city: '',
        zipCode:'',
        province: 'British Columbia',
        residenceStat:'Citizenship',
        localPhone:'(1  )    -    ',
        cellPhone:'(1  )    -    ',
        email:'',
        job:'',
        company:'',
        carNumPlate:'',
        babyBap:false,
        babyBapYear:'',
        babyBapChurch:'',
        bap: false,
        BapYear:'',
        BapChurch:'',
        crew:false,
        crewYear:'',
        crewChurch:'',
        duty:'성도',
        preChurch:'',
        comeWith:'',
        volunteer:{},       
       })
   }
   render(){
        
       return(
        <Container maxWidth="lg">
           <form className="totalForm">
               GCC 새가족 신청서
               <br/>
               <div className="field">
                    <TextField
                    name='firstName'
                    label= "영문 이름/First Name"
                    value = {this.state.firstName}
                    onChange ={this.handleChange}
                    />
                    <TextField
                    name='lastName'
                    label= "영문 성/Last Name"
                    value = {this.state.lastName}
                    onChange ={this.handleChange}
                    />
                    <TextField
                    name='korName'
                    label= "한국 성함/Korean Name"
                    value = {this.state.korName}
                    onChange ={this.handleChange}
                    />
                    <TextField
                    name='birth'
                    type="date"
                    label= "생년월일/Birth"
                    value = {this.state.birth}
                    onChange ={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <FormControl component="fieldset" >
                        <FormLabel component="legend">Gender</FormLabel>
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
                    <TextField
                        name='address'
                        label= "주소/Address"
                        value = {this.state.address}
                        onChange ={this.handleChange}
                    />
                    <TextField
                    name='city'
                    label= "도시/City"
                    value = {this.state.city}
                    onChange ={this.handleChange}
                    />
                    <FormControl required >
                        <InputLabel htmlFor="age-required">주/Province</InputLabel>
                        <Select
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
                    <TextField
                    name='zipCode'
                    label= "우편번호/Zipcode"
                    value = {this.state.zipCode}
                    onChange ={this.handleChange}
                    />
                    <FormControl required >
                        <InputLabel htmlFor="age-required">주/Province</InputLabel>
                        <Select
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
                    <FormControl>
                        <InputLabel htmlFor="formatted-text-mask-input">집전화/Local Phone</InputLabel>
                        <Input
                        name="localPhone"
                        value={this.state.localPhone}
                        onChange={this.handleChange}
                        inputComponent={this.TextMaskCustom}
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="formatted-text-mask-input">휴대전화/Cell Phone</InputLabel>
                        <Input
                        name="cellPhone"
                        value={this.state.cellPhone}
                        onChange={this.handleChange}
                        inputComponent={this.TextMaskCustom}
                        />
                    </FormControl>
                    <TextField
                    name='email'
                    label= "이메일/e-mail"
                    value = {this.state.email}
                    onChange ={this.handleChange}
                    placeholder="id@gmail.com"
                    />
                    <TextField
                    name='job'
                    label= "직업/Occupation"
                    value = {this.state.job}
                    onChange ={this.handleChange}
                    />
                    <TextField
                    name='company'
                    label= "직장/Company"
                    value = {this.state.company}
                    onChange ={this.handleChange}
                    />
                    <TextField
                    name='carNumPlate'
                    label= "차량번호/Number Plate"
                    value = {this.state.carNumPlate}
                    onChange ={this.handleChange}
                    />
               </div>
                <div className="field2">
                    <List className="BapCheck">
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox name="babyBap" value ={this.state.babyBap} onChange={this.handleChange}/> 유아세례
                            </ListItemIcon>
                            <TextField
                            name="babyBapYear"
                            disabled={!this.state.babyBap}
                            value={this.state.babyBapYear}
                            onChange={this.handleChange}
                            placeholder="년도"
                            />
                            <TextField
                            name="babyBapChurch"
                            disabled={!this.state.babyBap}
                            value={this.state.babyBapChurch}
                            onChange={this.handleChange}
                            placeholder="교회"
                            />                        
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox name="bap" value ={this.state.bap} onChange={this.handleChange}/> 세례
                            </ListItemIcon>
                            <TextField
                            name="BapYear"
                            disabled={!this.state.bap}
                            value={this.state.BapYear}
                            onChange={this.handleChange}
                            placeholder="년도"
                            />
                            <TextField
                            name="BapChurch"
                            disabled={!this.state.bap}
                            value={this.state.BapChurch}
                            onChange={this.handleChange}
                            placeholder="교회"
                            />                        
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox name="crew" value ={this.state.crew} onChange={this.handleChange}/> 입교
                            </ListItemIcon>
                            <TextField
                            name="crewYear"
                            disabled={!this.state.crew}
                            value={this.state.crewYear}
                            onChange={this.handleChange}
                            placeholder="년도"
                            />
                            <TextField
                            name="crewChurch"
                            disabled={!this.state.crew}
                            value={this.state.crewChurch}
                            onChange={this.handleChange}
                            placeholder="교회"
                            />                        
                        </ListItem>
                    </List>
                    
                    <FormControl required >
                        <InputLabel htmlFor="age-required">직분</InputLabel>
                        <Select
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
                        name="preChurch"
                        value={this.state.preChurch}
                        onChange={this.handleChange}
                        label="이전교회/Previous Church"
                    />
                    <TextField
                        name="comeWith"
                        value={this.state.comeWith}
                        onChange={this.handleChange}
                        label="인도자 or 교회지인"
                    />
                    <MultipleSelect handleMultipleSelect={this.handleMultipleSelect} handleSelectChange = {this.handleSelectChange}/>
                </div>
                <br/>
               <button onClick={(e)=>this.onSubmit(e)}>Submit</button>
            </form>
            </Container>
       )
   }
   
}
