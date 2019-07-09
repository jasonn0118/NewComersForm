// increaseMember(e) {
//     // let empty_member = Object.assign(this.state.family_member, {})
//     // console.log("asdasdasdasdasd", empty_member)
//     const member = Object.create(this.state.family_member)
//     member.key = this.state.number_member
//     this.setState({
//       number_member: this.state.number_member + 1,
//       members: […this.state.members, member],
//     })
       
//     // this.setState({
//     //   family_member: {
//     //     key: this.state.number_member
//     //   }
//     // }, () => {
//     //   this.setState({
//     //     number_member: this.state.number_member + 1,
//     //     members: […this.state.members, this.state.family_member],
//     //   })
//     // })
//   }

// decreaseMember(e, member) {
//     const member_list = this.state.members.filter(i => i.key !== member.key)
//     this.setState({
//       members: member_list,
//       number_member: this.state.number_member - 1,
//     })
//   }

//   render() {
//     const members = this.state.members.map((member, i) => {
//       return (
//         <div key={i}>
//           <FamilyMember
//             family_id={member.key}
//             family_member={member}
//             handleMember={this.handleMember}
//           />
//           <Button id={member.key} icon='cancel' onClick={e => this.decreaseMember(e, member)} />
//         </div>
//       );
//     });

//     handleMember(e, { name, value, id }) {
//         //const member = this.state.members
//         // let temp = this.state.family_member[name].value    
//         let target_member = this.state.members[id];
//         target_member[name] = value;
//         this.setState({
//           target_member: target_member
//         })
//       }



//       /*
//       family_member: {

//         member_birthday: null,
//         member_gender: '',
//         member_phone: '',
//         member_email: '',
//         member_job: '',
//         member_company: '',
//         member_serving_year: '',
//         member_church_name: '',
//         member_duty: '',
//         member_previous_church: '',
//         member_chosen_volunteer: [],
//         member_volunteer_etc: "",  
//       },
// */

// import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker'


// export class FamilyMember extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             relationship: [
//                 { key: 'a', text: '배우자', value: 'married spouse' },
//                 { key: 'b', text: '자녀', value: 'child' },
//                 { key: 'c', text: '형제/자매', value: 'sibling' },
//                 { key: 'd', text: '부모님', value: 'parents' },
//                 { key: 'e', text: '손자', value: 'grandchild' },
//                 { key: 'f', text: '친척', value: 'relative' },
//             ],

//             prevType: [
//                 { key: 'Y', text: 'Yes', value: 'Yes' },
//                 { key: 'N', text: 'No', value: 'No' },
//             ]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     <Form.Group className="member-relation">
//                         <Form.Field required inline>
//                             <label>관계(Relationship)</label>
//                             <Form.Select
//                                 id={this.props.family_id}
//                                 fluid
//                                 name="member_relation"
//                                 options={this.state.relationship}
//                                 placeholder='Relation'
//                                 value={this.props.family_member.member_relation}
//                                 onChange={this.props.handleMember}
//                             />
//                         </Form.Field>
//                     </Form.Group>
//                 </div>

//                 <div>
//                     <Form.Group className="member-prev">
//                         <Form.Field inline>
//                             <label>그레이스 이전 등록 여부/Previous Register:</label>
//                             <Form.Select
//                                 id={this.props.family_id}
//                                 fluid
//                                 name="member_prev"
//                                 options={this.state.prevType}
//                                 placeholder='Previous Register'
//                                 value={this.props.family_member.member_prev}
//                                 onChange={this.props.handleMember}
//                             />
//                         </Form.Field>
//                     </Form.Group>
//                 </div>

//                 <div>
//                     <Form.Group inline>
//                         <Form.Field>
//                             <label>한글 이름/Korean name:</label>
//                             <Form.Input id={this.props.family_id} name="member_kor_name" placeholder="Korean name"
//                                 value={this.props.family_member.member_kor_name} onChange={this.props.handleMember} />
                                
//                         </Form.Field>
//                     </Form.Group>
//                     <br />
//                     <Form.Group inline>
//                         <Form.Field>
//                             <label>영어 이름/English name:</label>
//                             <Form.Input id={this.props.family_id} name="member_eng_name" placeholder="English name"
//                                 value={this.props.family_member.member_eng_name} onChange={this.props.handleMember} />
//                         </Form.Field>
//                     </Form.Group>
//                 </div>
//                 {/* <Button onClick = {this.props.onSave}>Save</Button> */}
//                 {/* <div>
//                     <Form.Group inline>
//                         <Form.Field required>
//                             <label>생년월일/Birthday date(MM/DD/YYYY):</label>
//                             <DatePicker
//                                 placeholderText="Birthday"
//                                 selected={this.props.family_member.member_birthday}
//                                 name = "member_birthday"
//                                 onChange={this.props.handleMember}
//                                 peekNextMonth
//                                 showMonthDropdown
//                                 showYearDropdown
//                                 dropdownMode="select"
//                             />
//                         </Form.Field>
//                     </Form.Group>
//                 </div> */}
//             </div>
//         )
//     }
// }

