import React, {Component } from 'react';
import {Table ,Button} from 'react-bootstrap';

export default class Edit extends Component{
render()
{
    return(
        <div id="Edit" className="container">
            <h3>Edit Course</h3>
            {(value) =>{
                return(
                    <Table size="sm" variant="dark" striped bordered hover>
                    <tbody>
                        <tr>
                        <th>course</th>
                        <th>stream</th>
                        <th>after</th>
                        <th>Duration</th>
                        <th>type</th>
                        <th>about</th>
                        <th>exam_type</th>
                        <th>eligibility</th>
                        <th>recruitment</th>
                        <th>jobs</th>
                        <th>fees</th>
                        </tr>
                        <tr>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"course")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"stream")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"after")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"Duratin")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"type")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"exam_type")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"eligibility")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"recruitment")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"jobs")}} /></td>
                            <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"fees")}} /></td>
                            <td> <Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id ?"Save" :"update"}</Button></td>
                        </tr>
                        {value.Alldata.map(post => {
                                    return(
                                        <tr>
                                        <td>{post.course}</td>
                                        <td>{post.stream}</td>
                                        <td>{post.after}</td>
                                        <td>{post.duration}</td>
                                        <td>{post.type}</td>
                                        <td>{post.about}</td>
                                        <td>{post.exam_type}</td>
                                        <td>{post.eligibility}</td>
                                        <td>{post.recruitment}</td>
                                        <td>{post.jobs}</td>
                                        <td>{post.fees}</td>
                                        </tr>
                                    )

                        })
                    }
                    </tbody>  
                    </Table>
                )

            }}
        </div>
    )

}
}