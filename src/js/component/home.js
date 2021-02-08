import React, { useState } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");
	return (
		<div className="text-center mt-5">
			<ul className="trafficLight">
				<li
					onClick={() => setColor("red")}
					className={color === "red" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("yellow")}
					className={color === "yellow" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("green")}
					className={color === "green" ? "selected" : ""}
				/>
			</ul>
		</div>
	);
}
