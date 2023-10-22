import { forwardRef, ForwardRefRenderFunction } from "react";
import { InputProps } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { OutlinedInput } from "@mui/material";

type InputComponentProps = InputProps;

const genericInput: ForwardRefRenderFunction<
	HTMLInputElement,
	InputComponentProps
> = (
	{ type, name, placeholder, value, onChange, fullWidth = false, ...rest },
	ref
) => {
	return (
		<FormControl variant="outlined" fullWidth={fullWidth} tabIndex={-1}>
			<InputLabel htmlFor={name}>{placeholder}</InputLabel>
			<OutlinedInput
				tabIndex={0}
				name={name}
				id={name}
				type={type}
				{...rest}
				label={placeholder}
				ref={ref}
				fullWidth={fullWidth}
				value={value}
				onChange={onChange}
			/>
		</FormControl>
	);
};

export default forwardRef(genericInput);
