function CreateTask() {
  return (
    <div className="p-5">
      <h2>Create Tasks</h2>
      <div className="flex items-center justify-between gap-5 pt-5">
      <label htmlFor="taskName">TaskName</label>
      <input type="text" id="taskName" placeholder="enter the tasks" className="w-full rounded-md placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-center justify-between gap-5 pt-5 ">
      <label htmlFor="date">Date</label>
      <input type="date" id="date" className="w-full rounded-md pl-3 placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-center justify-between gap-5 pt-5">
      <label htmlFor="asingto" className="flex-shrink-0">Asign to</label>
      <input type="text" id= "asignto" placeholder="employee name" className="w-full rounded-md  placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-center justify-between gap-5 pt-5 ">
      <label htmlFor="category">Category</label>
      <input type="text" id= "category" placeholder="category" className="w-full rounded-md placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-start justify-between gap-5 pt-5 pb-3">
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" className="w-full h-32 p-1 border-2"></textarea>
      </div>
      <button className="py-2 px-2 bg-sky-500 rounded-md ">create Task</button>
    </div>
  )
}

export default CreateTask