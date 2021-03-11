import React, { useState, useEffect } from "react";

export function Home() {
	const [task, setTask] = useState("");
	const [check, setCheck] = useState(false);

	const [list, setList] = useState([]);

	return (
		<div className="container mt-5 text-center">
			<div className="row d-flex justify-content-center">
				<div className="col-md-10">
					<div className="card">
						<h1 className="display-5 text-primary">To Do List</h1>
						<div className="card-header">
							<div className="row mt-4">
								<div className="col-sm-8 pb-3">
									<label>Task</label>
									<input
										className="form-control"
										type="text"
										value={task}
										onChange={e => {
											setTask(
												e.target.value.toUpperCase()
											);
										}}
									/>
								</div>
								<div className="col-sm-1 pb-3">
									<label>Done</label>
									<input
										type="checkbox"
										className="form-control"
										checked={check}
										onChange={e =>
											setCheck(e.target.checked)
										}
									/>
								</div>
								<div className="col-sm-3 pb-3 d-flex align-items-end">
									<button
										type="button"
										className="form-control btn btn-primary"
										onClick={() => {
											let obj = {
												label: task,
												done: check
											};
											setList(list.concat(obj));
											setCheck(false);
											setTask("");
											//console.log({ list });
										}}>
										Add List
									</button>
								</div>
							</div>
						</div>
						<div className="card-body text-primary">
							{!list
								? "loading..."
								: list.map((item, index) => {
										return (
											<label
												className="form-control text-left px-5"
												key={index}>
												<input
													type="checkbox"
													checked={item.done}
												/>
												{item.label}
											</label>
										);
								  })}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
