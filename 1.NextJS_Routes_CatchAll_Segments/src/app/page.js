
"use client"

const page = () => {
  console.log("Hi, My name is Kalyan")
  return (
    <div>
        <h1>Welcome to NextJS</h1>
        <button onClick={()=>alert("welcome to Next JS")}>Click me</button>
    </div>
  )
}

export default page
