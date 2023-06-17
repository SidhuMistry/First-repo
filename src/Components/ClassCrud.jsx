import React, { Component } from 'react'
import withRouter from './widthRouter';

export class ClassCrud extends Component {
    constructor(){
        super();
        this.state = {
            obj : {id : 0, fname : "" , lname : "" , email : "" , password : "" , gender : "" , hobby : [] , img : ""},
            array : [],
            count : 1,
            blankObj : {id : 0, fname : "" , lname : "" , email : "" , password : "" , gender : "" , hobby : [] , img : ""}
        }
        this.getValue = this.getValue.bind(this)
        this.Save = this.Save.bind(this)
    }
    

    componentDidMount(){
        this.setState({array : JSON.parse(localStorage.getItem('arr')) || []})
        this.setState({count : JSON.parse(localStorage.getItem('count')) || 1})
    }
    componentDidUpdate(){
        localStorage.setItem('arr' , JSON.stringify(this.state.array))
        localStorage.setItem('count' , JSON.stringify(this.state.count))
    }
    
    async getValue(e){
        if(e.target.name == 'hobby'){
            if(e.target.checked){
                this.state.obj.hobby = [...this.state.obj.hobby , e.target.value]
            }else{
                this.state.obj.hobby = this.state.obj.hobby.filter((x) => x != e.target.value)
            }
            this.setState({obj : {...this.state.obj}})
        }else{
            this.setState({obj : {...this.state.obj, [e.target.name] : e.target.value }})
        }
    }

    Save(){
        if(this.state.obj.id == 0){
            this.state.obj.id = this.state.count;
            this.state.count = this.state.count+1;
            this.setState({count : this.state.count})
            this.state.array.push(this.state.obj);
        }else{
            let index = this.state.array.findIndex((x) => x.id == this.state.obj.id)
            this.state.array.splice(index , 1 , this.state.obj)
        }
        this.setState({array : [...this.state.array]})
        this.setState({obj : {...this.state.blankObj}})
    }
    editUser(id){
        let editObj = this.state.array.find((x) => x.id == id)
        this.setState({obj : {...editObj}})
    }
    deleteUser(id){
        let index = this.state.array.findIndex((x) => x.id == id)
        this.state.array.splice(index , 1);
        this.setState({array : [...this.state.array]})
    }
  render() {
    return (
      <>
      {console.log(this.props)}
        <form className='w-50 mt-5 shadow-lg p-3 mx-auto'>
            <h3>FORM</h3>
            <label htmlFor="" className='d-block mt-2 mb-1'>First Name</label> 
            <input type="text" name='fname' className='w-100' value={this.state.obj.fname} onChange={this.getValue} />
            <label htmlFor="" className='d-block mt-2 mb-1'>Last Name</label>
            <input type="text" name='lname' className='w-100' value={this.state.obj.lname} onChange={this.getValue}/>
            <label htmlFor="" className='d-block mt-2 mb-1'>Email</label>
            <input type="email" name='email' className='w-100' value={this.state.obj.email} onChange={this.getValue}/>
            <label htmlFor="" className='d-block mt-2 mb-1'>Password</label>
            <input type="password" name='password' className='w-100' value={this.state.obj.password} onChange={this.getValue}/>
                    
            <label htmlFor="" className='d-block mt-2 mb-1'>Gender</label>
            <input type="radio" name='gender' value='Male' checked={this.state.obj.gender == 'Male'} onChange={this.getValue}/>Male
            <input type="radio" name='gender' value='Female' checked={this.state.obj.gender == 'Female'} onChange={this.getValue}/>Female
            <label htmlFor="" className='d-block mt-2 mb-1'>Hobby</label>
            <input type="checkbox" name='hobby' value='write' checked={this.state.obj.hobby?.includes('write')} onChange={this.getValue}/>Write 
            <input type="checkbox" name='hobby' value='Read' checked={this.state.obj.hobby?.includes('Read')} onChange={this.getValue}/>Read 
            <input type="checkbox" name='hobby' value='drawing' checked={this.state.obj.hobby?.includes('drawing')} onChange={this.getValue}/>drawing <br />

            <button type='button' className='btn btn-success mt-4' onClick={this.Save}>Save</button>
        </form>
        <table className='table mt-4'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Hobby</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.array?.map((x,i) => {
                        return <tr key={i}>
                        <td>{x.id}</td>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.email}</td>
                        <td>{x.password}</td>
                        <td>{x.gender}</td>
                        <td>{x.hobby?.join(', ')}</td>
                        <td>
                            <button className='btn btn-warning py-1 me-2' onClick={() => this.editUser(x.id)}>Edit</button>
                            <button className='btn btn-danger py-1' onClick={() => this.deleteUser(x.id)} >Delete</button>
                        </td>
                    </tr>
                    })
                }
                
            </tbody>
        </table>
      </>
    )
  }
}

export default withRouter(ClassCrud)