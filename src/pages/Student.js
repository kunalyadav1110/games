import axios from "axios";
import React, { useEffect, useState } from "react";

function Student() {
  useEffect(()=>{getData()}, [])
  const [studentObj, setStudentObj] = useState({});
  const [id, setId] = useState("")
  const postDataFn = () => {
    axios.post("http://localhost:5002/api/student", studentObj).then((res) => {
      alert("Successfully");
      setStudentObj({ name: "", gender: "", mobile: "" });
      getData()
    });
  };

  const [studentData, setStudentData] = useState([])
  const getData = ()=>{
    axios.get("http://localhost:5002/api/student").then((res)=>{
        setStudentData(res.data.data)
    })
  }

  const deleteFn = (id)=>{
    axios.delete("http://localhost:5002/api/student/"+ id).then(()=>{
    alert("Deleted Successfully")    
    ;getData()})
  }

  const updateFn = ()=>{
    axios.put("http://localhost:5002/api/student/"+id, studentObj).then((res)=>{
        alert("Updated")
        getData()
        setStudentObj({ name: "", gender: "", mobile: "" });
        setId("")
    })
  }
  return (
    <div>
      <div className="flex gap-4">
        <input
          value={studentObj?.name}
          onChange={(e) =>
            setStudentObj({ ...studentObj, name: e.target.value })
          }
          className="border p-2"
          placeholder="name"
        ></input>
        <input
          value={studentObj?.gender}
          name="gender"
          type="radio"
          onChange={(e) => setStudentObj({ ...studentObj, gender: "Male" })}
          className="border p-2"
          placeholder="gender"
        ></input>
        <label>Male</label>
        <input
          value={studentObj?.gender}
          name="gender"
          type="radio"
          onChange={(e) => setStudentObj({ ...studentObj, gender: "Female" })}
          className="border p-2"
          placeholder="gender"
        ></input>
        <label>Female</label>
        <input
          value={studentObj.mobile}
          onChange={(e) =>
            setStudentObj({ ...studentObj, mobile: e.target.value })
          }
          className="border p-2"
          placeholder="mobile"
        ></input>
        {id=="" ?
        <button
          
          onClick={() => postDataFn()}
          className="border bg-purple-400 text-white"
        >
          Submit
        </button> :
        <button
          onClick={() => updateFn()}
          className="border bg-purple-400 text-white"
        >
          Update
        </button>}
      </div>
      <div>{JSON.stringify(studentData)}</div>
      <table>
        <thead>
          <th>S.no</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Mobile</th>
          <th>Action</th>
        </thead>
        <tbody>
        {studentData.map((i, index)=>
          <tr>
            <td>{index+1}.</td>
            <td>{i.name}</td>
            <td>{i.gender}</td>
            <td>{i.mobile}</td>
            <td className="flex gap-4">
              <button onClick={()=>{
                setStudentObj({
                    name: i.name,
                    gender: i.gender,
                    mobile: i.mobile
                })
                setId(i._id)
              }} className="border bg-black text-white">Edit</button>
              <button onClick={()=>deleteFn(i._id)} className="border bg-black text-white">Delete</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
