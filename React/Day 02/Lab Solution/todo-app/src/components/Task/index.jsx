function Task(props) {
  return (
    <>
      <div className="bg-blue-400 mx-8 lg:mx-24 my-4 py-2 px-3 rounded-sm self-stretch">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-4 md:flex-row">
            <button
              className="btn btn-success text-white font-bold"
              onClick={() => {
                props.completeHandler(props.task.id);
              }}
            >
              Complete
            </button>
            <button
              className="btn btn-error text-white font-bold"
              onClick={() => {
                props.deleteHandler(props.task.id);
              }}
            >
              Delete
            </button>
          </div>

          {props.task.isComplete == true ? (
            <p className="font-semibold self-center text-white line-through decoration-black decoration-1">
              {props.task.description}
            </p>
          ) : (
            <p className="font-semibold self-center text-white">
              {props.task.description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Task;
