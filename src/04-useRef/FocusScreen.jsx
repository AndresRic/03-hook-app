import React, { useRef } from "react";

export const FocusScreen = () => {
	const refToInput = useRef(null);

	const onSelect = () => {
		console.log(refToInput);
		refToInput.current.select();
	};

	return (
		<>
			<h1>Focus Screen (useRef)</h1>
			<hr />

			<label htmlFor="text-to-selec">
				Ingresar Texto para seleccionar
				<input ref={refToInput} type="text" name="text-to-selec" className="form-control" />
			</label>

			<button className="btn btn-primary" onClick={onSelect}>
				Select
			</button>
		</>
	);
};
